"use client";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";
import Link from "next/link";
const links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Journey",
    href: "#journey",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-pink-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Sunil.dev
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Frontend Developer specializing in
              React.js, Next.js and modern UI
              experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    text-gray-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Connect With Me
            </h3>

            <div className="flex gap-4">
              <Link
                href="https://github.com/Sunil43091"
                className="
                  w-14 h-14
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex items-center justify-center
                  hover:border-cyan-400/40
                  hover:text-cyan-400
                  transition-all
                  duration-300
                "
              >
                <FaGithub  size={22} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/sunil-kumar-7495601a5/"
                className="
                  w-14 h-14
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex items-center justify-center
                  hover:border-cyan-400/40
                  hover:text-cyan-400
                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn  size={22} />
              </Link>

              <Link
                href="https://wa.me/919056343091"
                className="
                  w-14 h-14
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex items-center justify-center
                  hover:border-cyan-400/40
                  hover:text-cyan-400
                  transition-all
                  duration-300
                "
              >
                <Mail size={22} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-center md:text-left">
            © 2026 Sunil Kumar. All Rights Reserved.
          </p>

          <a
            href="#"
            className="
              w-12 h-12
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-pink-500
              flex items-center justify-center
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}