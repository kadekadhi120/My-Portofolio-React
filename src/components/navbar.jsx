import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="ml-10">
          <h1>P O R T O F O L I O</h1>
        </div>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/i-kadek-prasetya-adhi-nugraha-5503942b8">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kadekadhi120">
          <FaGithub />
        </a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=i.nugraha005@binus.ac.id&tf=cm&su=Feedback">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/kdadhi0">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
