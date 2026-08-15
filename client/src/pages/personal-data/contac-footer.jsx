import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

function ContactFooter() {
  return (
    <footer className="relative border-t-1 border-gray-300 flex min-h-[30svh] mt-8 shadow-lg items-center justify-center w-full flex-1 flex-col">
      <div className="flex gap-x-4 p-4">
        <a
          href="https://www.linkedin.com/in/laia-bombelli-2b3416351/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 transition-transform duration-300 hover:scale-125 hover:text-black"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="mailto:laiabombelli@gmail.com"
          className="text-gray-600 transition-transform duration-200 hover:scale-125 hover:text-black"
        >
          <BiLogoGmail size={30} />
        </a>

        <a
          href="https://www.instagram.com/laiabbr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 transition-transform duration-200 hover:scale-125 hover:text-black"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      <p className="text-gray-700 ">© 2026 Laia Bombelli. All Rigths reserved.</p>
    </footer>
  );
}

export default ContactFooter;
