"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505] md:pt-0 pt-32">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 blur-[180px] rounded-full"></div>
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 tracking-[8px] uppercase mb-5 text-sm"
            >
              Frontend Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Hey! I Am
              <br />

              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Sunil Kumar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 mt-8 text-xl max-w-xl leading-9"
            >
              Building modern digital experiences using React.js,
              Next.js and creating premium UI experiences with
              performance and scalability in mind.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5 mt-10"
            >
              <a href="https://codebysunil.vercel.app/" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                 <button
                className="
                  px-8 py-4 rounded-full font-semibold
                  bg-gradient-to-r from-cyan-500 to-pink-500
                  hover:scale-105 transition duration-300
                  shadow-lg shadow-cyan-500/30
                "
              >
                Explore Journey
              </button>
              </a>
             
                <a href="https://codebysunil.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <button
                  className="
                  border border-white/10
                  px-8 py-4 rounded-full
                  hover:bg-white/5
                  transition duration-300
                "
              >
                View Projects
              </button>
              </a>
             
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-10 mt-16"
            >
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">4+</h3>
                <p className="text-gray-500">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-pink-400">50+</h3>
                <p className="text-gray-500">Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">15+</h3>
                <p className="text-gray-500">Technologies</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                w-[500px]
                h-[500px]
                rounded-full
                bg-cyan-500/20
                blur-[150px]
              "
            />

            {/* Floating Image */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <div
                className="
                  relative
                  rounded-[40px]
                  overflow-hidden
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-3
                  shadow-2xl shadow-cyan-500/20
                "
              >
                <Image
                  src="/images/my-profile.png"
                  width={500}
                  height={650}
                  alt="Sunil Kumar"
                  className="rounded-[30px]"
                />
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                delay: 1.2,
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-10
                left-10
                bg-white/10
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                px-6 py-4
              "
            >
             <p className="text-cyan-400 text-sm">My Current Focus</p>
             <h3 className="font-semibold">Modern Frontend Development</h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
