'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Eye, X, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/theme-context';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenModal, setHasSeenModal] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Show modal on every page refresh/load
    // Always show it when the component mounts (on page refresh)
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  const handleChoice = async (choice: 'hiring' | 'visiting') => {
    // Store the choice in localStorage (persists across sessions)
    localStorage.setItem('visitor-type', choice);
    
    // Track the visit (secretly, no UI feedback)
    try {
      await fetch('/api/track-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: choice }),
      });
    } catch (error) {
      // Silently fail - tracking shouldn't interrupt user experience
      console.error('Failed to track visit:', error);
    }
    
    // Dispatch custom event to notify other components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('visitor-type-changed', { detail: choice }));
      
      // If hiring, trigger AI Copilot to open automatically
      if (choice === 'hiring') {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('open-ai-copilot', { detail: 'hiring' }));
        }, 300);
      }
    }
    
    setIsOpen(false);
    setHasSeenModal(true);
  };

  const handleClose = () => {
    // Just close the modal - it will show again on next page refresh
    setIsOpen(false);
    setHasSeenModal(true);
  };

  if (hasSeenModal) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-white/95 backdrop-blur-md dark:bg-gray-900/95 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="p-8 pt-12">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                    <Sparkles size={40} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Welcome! 👋
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                  I&apos;m Satya Prakash, a Full-Stack Developer
                </p>

                {/* Question */}
                <p className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
                  What brings you here today?
                </p>

                {/* Options */}
                <div className="space-y-4">
                  {/* Hiring Option */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleChoice('hiring')}
                    className="w-full p-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Briefcase size={24} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-lg">Looking to Hire</div>
                      <div className="text-sm text-white/90">I&apos;m interested in your skills and experience</div>
                    </div>
                  </motion.button>

                  {/* Visiting Option */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleChoice('visiting')}
                    className="w-full p-6 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg transition-all flex items-center gap-4 group hover:border-purple-500 dark:hover:border-purple-500"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                      <Eye size={24} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-lg">Just Visiting</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Exploring your portfolio and projects</div>
                    </div>
                  </motion.button>
                </div>

                {/* Footer note */}
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6">
                  This helps me personalize your experience
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

