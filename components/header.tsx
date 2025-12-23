"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Menu, X } from "lucide-react";
import type { SectionName } from "@/lib/types";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (linkName: SectionName) => {
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
    setMobileMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white shadow-lg shadow-black/[0.03] sm:top-6 sm:h-[3.25rem] sm:w-[46rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        style={{ zIndex: 999 }}
      ></motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2 z-[1000]">
        <ul className="flex w-auto flex-nowrap gap-4 justify-center items-center px-8">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-full text-[0.9rem] font-medium",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => handleLinkClick(link.name)}
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full absolute inset-0 -z-10 dark:from-purple-900/50 dark:to-pink-900/50"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="sm:hidden fixed top-[0.15rem] left-1/2 -translate-x-1/2 z-[1000] w-full px-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="absolute right-4 top-2 p-2 text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] sm:hidden"
            />
            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-[4.5rem] right-0 h-[calc(100vh-4.5rem)] w-64 bg-white/95 backdrop-blur-md dark:bg-gray-950/95 shadow-xl z-[999] sm:hidden overflow-y-auto"
            >
              <ul className="flex flex-col p-4 gap-2">
                {links.map((link) => (
                  <li key={link.hash}>
                    <Link
                      className={clsx(
                        "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        {
                          "bg-gradient-to-r from-purple-100 to-pink-100 text-gray-950 dark:from-purple-900/50 dark:to-pink-900/50 dark:text-gray-200":
                            activeSection === link.name,
                          "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800":
                            activeSection !== link.name,
                        }
                      )}
                      href={link.hash}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}