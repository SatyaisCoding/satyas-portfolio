'use client'
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/theme-context";

type Theme = 'light' |  'dark'
function ThemeSwitch() {
  const {theme, toggleTheme} = useTheme()
  return (
    <button 
      className="fixed top-6 right-6 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-sm border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-110 transition-all dark:bg-gray-950 dark:border-gray-700 z-[997] sm:top-8"
      onClick={() => toggleTheme()}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (<Sun size={20} />) : (<Moon size={20} />) }
    </button>
  )
}

export default ThemeSwitch