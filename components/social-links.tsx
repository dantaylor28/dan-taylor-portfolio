import React from "react";
import { FaLinkedin, FaSquareGithub, FaInstagram } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div>
      <a href="https://github.com/dantaylor28" target="_blank">
        <FaSquareGithub />
      </a>
      <a href="https://www.linkedin.com/in/dan-m-taylor/">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/dantaylor93_/">
        <FaInstagram />
      </a>
    </div>
  );
}
