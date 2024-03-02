'use client'
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/theme-context";

type Theme = 'light' |  'dark'
function ThemeSwitch() {
  const {theme, toggleTheme} = useTheme()
  return (
    <button className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-105 transition-all dark:bg-gray-950 "
    onClick={() => toggleTheme()}>
      {theme === 'light' ? (<Sun />) : (<Moon/>) }
    </button>
  )
}

export default ThemeSwitch