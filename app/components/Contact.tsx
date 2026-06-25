"use client";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "sk3645797@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    value: "+91 9056343091",
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    value: "Punjab, India",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative md:py-32 py-10 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm">
            Contact
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            Lets Build Something
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">
            Have a project in mind? Feel free to contact me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white/[0.03]
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-6
                  flex items-center gap-5
                "
              >
                <div
                  className="
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-r
                  from-cyan-500/20
                  to-pink-500/20
                  text-cyan-400
                "
                >
                  {item.icon}
                </div>

                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>

                  <h4 className="text-xl font-semibold text-white">
                    {item.value}
                  </h4>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <button
                className="
                w-14 h-14 rounded-full
                border border-white/10
                flex items-center justify-center
                hover:bg-white/10
                transition-all
              "
              >
                <a
                  href="https://github.com/Sunil43091"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={22} />
                </a>
              </button>

              <button
                className="
                w-14 h-14 rounded-full
                border border-white/10
                flex items-center justify-center
                hover:bg-white/10
                transition-all
              "
              >
                <a
                  href="http://linkedin.com/in/sunil-kumar-7495601a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={22} />
                </a>
              </button>
            </div>
          </div>

          {/* Right Side Form */}
          <div
            className="
              bg-white/[0.03]
              border border-white/10
              backdrop-blur-xl
              rounded-[32px]
              p-8
            "
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  bg-white/[0.04]
                  border border-white/10
                  rounded-2xl
                  px-5 py-4
                  outline-none
                  text-white
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  bg-white/[0.04]
                  border border-white/10
                  rounded-2xl
                  px-5 py-4
                  outline-none
                  text-white
                "
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="
                  w-full
                  bg-white/[0.04]
                  border border-white/10
                  rounded-2xl
                  px-5 py-4
                  outline-none
                  text-white
                  resize-none
                "
              />

              <button
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-pink-500
                  flex items-center
                  justify-center
                  gap-3
                  font-semibold
                  hover:opacity-90
                  transition-all
                "
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
