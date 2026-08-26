import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function ContactFooter() {
  const iconClass =
    "text-gray-600 transition-transform duration-300 hover:scale-125 hover:text-black text-xl md:text-xl lg:text-2xl";

  return (
    <footer className="relative w-full border-t border-gray-300 shadow-lg flex flex-col items-center justify-center text-center min-h-[16svh] md:min-h-[17svh] lg:min-h-[25svh] mt-6 md:mt-8 px-4 py-4 md:py-5 lg:py-6">
      <div className="flex gap-x-5 md:gap-x-4 lg:gap-x-5 pb-2 md:pb-3">
        <a
          href="https://www.linkedin.com/in/laia-bombelli-2b3416351/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={iconClass}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:laiabombelli@gmail.com"
          aria-label="Email"
          className={iconClass}
        >
          <BiLogoGmail />
        </a>
        <a
          href="https://www.instagram.com/laiabbr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={iconClass}
        >
          <FaInstagram />
        </a>
      </div>

      <p className="text-gray-700 text-[10px] md:text-xs lg:text-sm">
        © 2026 Laia Bombelli. All rights reserved.
      </p>
    </footer>
  );
}

export default ContactFooter;
