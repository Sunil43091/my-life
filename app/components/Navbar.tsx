"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div
          className="
            mt-4
            h-16 lg:h-20
            rounded-full
            border border-white/10
            bg-black/40
            backdrop-blur-xl
            flex items-center justify-between
            px-5 lg:px-8
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="
              text-xl lg:text-2xl
              font-bold
              bg-gradient-to-r
              from-cyan-400
              to-pink-500
              bg-clip-text
              text-transparent
            "
          >
            Sunil.dev
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-300
                  text-sm
                  font-medium
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <button
            className="
              hidden lg:block
              px-6 py-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-pink-500
              text-white
              font-semibold
              hover:scale-105
              transition-all
              duration-300
            "
          >
        <a href="https://codebysunil.vercel.app/" target="_blank" rel="noopener noreferrer">
                    See My Work
                  </a>
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="
                lg:hidden
                mt-4
                rounded-3xl
                border border-white/10
                bg-black/70
                backdrop-blur-xl
                p-6
              "
            >
              <nav className="flex flex-col gap-5">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      text-gray-300
                      hover:text-cyan-400
                      transition-all
                      duration-300
                    "
                  >
                    {item.name}
                  </a>
                ))}

                <button
                  className="
                    mt-4
                    py-3
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-pink-500
                    text-white
                    font-semibold
                  "
                >
                  <a href="https://codebysunil.vercel.app/" target="_blank" rel="noopener noreferrer">
                    See My Work
                  </a>
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
