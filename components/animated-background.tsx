'use client';

import { useEffect, useState } from "react";
import { useTheme } from "@/context/theme-context";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base background color */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950" />
      
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-40 dark:opacity-15" />
      
      {/* Animated gradient orbs */}
      {/* Slight glow in both themes; darker + softer in dark mode */}
      <div
        className="absolute top-0 -left-4 w-72 h-72 rounded-full filter blur-xl animate-float
                   bg-purple-300 opacity-70 mix-blend-multiply
                   dark:bg-purple-500 dark:opacity-20 dark:mix-blend-screen"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-0 -right-4 w-72 h-72 rounded-full filter blur-xl animate-float
                   bg-yellow-300 opacity-70 mix-blend-multiply
                   dark:bg-yellow-400 dark:opacity-20 dark:mix-blend-screen"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute -bottom-8 left-20 w-72 h-72 rounded-full filter blur-xl animate-float
                   bg-pink-300 opacity-70 mix-blend-multiply
                   dark:bg-pink-500 dark:opacity-20 dark:mix-blend-screen"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full filter blur-xl animate-float
                   transform -translate-x-1/2 -translate-y-1/2
                   bg-blue-300 opacity-70 mix-blend-multiply
                   dark:bg-blue-500 dark:opacity-20 dark:mix-blend-screen"
        style={{ animationDelay: "6s" }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme === 'dark' ? 'white' : 'black'} 1px, transparent 1px),
                            linear-gradient(to bottom, ${theme === 'dark' ? 'white' : 'black'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}

