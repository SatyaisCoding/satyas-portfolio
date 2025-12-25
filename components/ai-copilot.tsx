'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useTheme } from '@/context/theme-context';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AICopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [instagramCountdown, setInstagramCountdown] = useState<number | null>(null);
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Get personalized greeting based on visitor type
  const getInitialMessage = () => {
    if (typeof window !== 'undefined') {
      const visitorType = localStorage.getItem('visitor-type');
      if (visitorType === 'hiring') {
        return "Hello! 👋 Welcome, recruiter! I'm Satya's AI assistant. I can help you learn about Satya's qualifications, experience, projects, and skills. Use the shortcuts below to get started, or ask me anything!";
      } else if (visitorType === 'visiting') {
        return "Hi there! 👋 I'm Satya's AI assistant. Welcome to the portfolio! Feel free to ask me anything about Satya, his projects, skills, experience, or anything else you're curious about!";
      }
    }
    return "Hi! I'm Satya's AI assistant. Ask me anything about Satya, his projects, skills, experience, or anything else from his portfolio!";
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: getInitialMessage(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Shortcut prompts for hiring
  const hiringShortcuts = [
    "Tell me about Satya's experience",
    "What are Satya's key skills?",
    "Show me Satya's projects",
    "Why should I hire Satya?",
    "What technologies does Satya know?",
  ];

  // Shortcut prompts for visiting (casual visitors)
  const visitingShortcuts = [
    "Are you a stalker? Here to stalk?",
    "Tell me about Satya's projects",
    "What are Satya's skills?",
    "Show me Satya's experience",
    "What technologies does Satya know?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Cleanup countdown on unmount
  useEffect(() => {
    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
      setInstagramCountdown(null);
    };
  }, []);

  // Listen for open copilot event (from welcome modal)
  useEffect(() => {
    const handleOpenCopilot = (event: CustomEvent) => {
      const visitorType = event.detail;
      setIsOpen(true);
      if (visitorType === 'hiring') {
        setShowShortcuts(true);
        // Update message for hiring
        if (messages.length === 1) {
          setMessages([{
            role: 'assistant',
            content: "Hello! 👋 Welcome, recruiter! I'm Satya's AI assistant. I can help you learn about Satya's qualifications, experience, projects, and skills. Use the shortcuts below to get started, or ask me anything!",
          }]);
        }
      } else if (visitorType === 'visiting') {
        setShowShortcuts(true);
        // Update message for visiting
        if (messages.length === 1) {
          setMessages([{
            role: 'assistant',
            content: "Hi there! 👋 I'm Satya's AI assistant. Welcome to the portfolio! Feel free to ask me anything about Satya, his projects, skills, experience, or anything else you're curious about!",
          }]);
        }
      }
    };

    window.addEventListener('open-ai-copilot', handleOpenCopilot as EventListener);
    
    return () => {
      window.removeEventListener('open-ai-copilot', handleOpenCopilot as EventListener);
    };
  }, [messages.length]);

  // Update greeting when visitor type changes
  useEffect(() => {
    const handleVisitorTypeChange = (event: CustomEvent) => {
      const visitorType = event.detail;
      if (messages.length === 1) {
        // Only update if it's still the initial message
        const newMessage = visitorType === 'hiring'
          ? "Hello! 👋 Welcome, recruiter! I'm Satya's AI assistant. I can help you learn about Satya's qualifications, experience, projects, and skills. Use the shortcuts below to get started, or ask me anything!"
          : "Hi there! 👋 I'm Satya's AI assistant. Welcome to the portfolio! Feel free to ask me anything about Satya, his projects, skills, experience, or anything else you're curious about!";
        
        setMessages([{ role: 'assistant', content: newMessage }]);
        if (visitorType === 'hiring' || visitorType === 'visiting') {
          setShowShortcuts(true);
        }
      }
    };

    // Listen for custom event
    window.addEventListener('visitor-type-changed', handleVisitorTypeChange as EventListener);
    
    return () => {
      window.removeEventListener('visitor-type-changed', handleVisitorTypeChange as EventListener);
    };
  }, [messages.length]);

  // Check if visitor is hiring or visiting when copilot opens
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      const visitorType = localStorage.getItem('visitor-type');
      if (visitorType === 'hiring' || visitorType === 'visiting') {
        setShowShortcuts(true);
      }
    } else {
      setShowShortcuts(false);
    }
  }, [isOpen]);


  const handleSend = async (customMessage?: string) => {
    const messageToSend = customMessage || input;
    if (!messageToSend.trim() || isLoading) return;

    // Handle stalker question specially - redirect to Instagram with countdown
    if (messageToSend.toLowerCase().includes('stalker') || messageToSend.toLowerCase().includes('stalk')) {
      const stalkerResponse: Message = {
        role: 'assistant',
        content: `Haha! 😂 Caught you! 🕵️‍♂️\n\nIf you're here to stalk, why don't you go check out Instagram instead? There are much more interesting things to stalk there! 📸✨\n\nHere's my Instagram profile: https://www.instagram.com/_satya_._prakash_/\n\nBut hey, while you're here, feel free to ask me about Satya's projects, skills, or anything else! I'm actually pretty helpful when you're not trying to stalk! 😄`,
      };
      setMessages((prev) => [...prev, { role: 'user', content: messageToSend }, stalkerResponse]);
      setInput('');
      setShowShortcuts(false);
      
      // Clear any existing countdown
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      
      // Start countdown from 10 seconds
      setInstagramCountdown(10);
      
      // Countdown timer
      let countdown = 10;
      countdownIntervalRef.current = setInterval(() => {
        countdown -= 1;
        setInstagramCountdown(countdown);
        
        if (countdown <= 0) {
          if (countdownIntervalRef.current) {
            clearInterval(countdownIntervalRef.current);
            countdownIntervalRef.current = null;
          }
          setInstagramCountdown(null);
          window.open('https://www.instagram.com/_satya_._prakash_/', '_blank');
        }
      }, 1000);
      
      return;
    }

    const userMessage: Message = { role: 'user', content: messageToSend };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setShowShortcuts(false); // Hide shortcuts after first message
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageToSend,
          conversationHistory: updatedMessages.slice(-6), // Send last 6 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response || "I'm sorry, I couldn't process that request. Please try again.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Failed to fetch AI response:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "I'm sorry, there was an error processing your request. Please try again. If the issue persists, please refresh the page.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[998] w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Copilot"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-[998] w-96 h-[600px] bg-white/95 backdrop-blur-md dark:bg-gray-900/95 rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <h3 className="font-semibold">AI Copilot</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Shortcut prompts for hiring or visiting */}
              {showShortcuts && messages.length === 1 && (() => {
                const visitorType = typeof window !== 'undefined' ? localStorage.getItem('visitor-type') : null;
                const shortcuts = visitorType === 'hiring' ? hiringShortcuts : visitingShortcuts;
                
                return (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {shortcuts.map((shortcut, index) => (
                        <button
                          key={index}
                          onClick={() => handleSend(shortcut)}
                          className="px-3 py-1.5 text-xs bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 transition-all cursor-pointer border border-purple-200 dark:border-purple-800"
                        >
                          {shortcut}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()}
              
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                      <User size={16} className="text-gray-600 dark:text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              {/* Instagram countdown timer */}
              {instagramCountdown !== null && instagramCountdown > 0 && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl px-4 py-2 border border-purple-200 dark:border-purple-800">
                    <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                      Opening Satya&apos;s Instagram account in <span className="text-purple-900 dark:text-purple-100 font-bold text-base">{instagramCountdown}</span> seconds... 📸
                    </p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Satya, projects, skills..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                Ask about projects, skills, experience, or anything else!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

