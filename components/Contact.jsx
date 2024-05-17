import React from "react";
import { SiGmail } from "react-icons/si";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import linkedin from "../public/icons/Linkedin.svg";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const hover = "hover:scale-125 transition duration-150";
  return (
    <>
      <div
      >
        <div className="flex flex-wrap justify-around my-4 border-t py-8">
          <Link href="mailto:syedfarazhasan1@gmail.com" target="_blank">
            <SiGmail color="#ff4343" size="2em" className={hover} />
          </Link>
          <Link href="https://twitter.com/farazz02" target="_blank">
            <FaTwitter color="#1DA1F2" size="2em" className={hover} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/syed-faraz-hasan"
            target="_blank"
          >
            <Image src={linkedin} height={32} className={hover} />
          </Link>
          <Link href="https://github.com/SFarazH" target="_blank">
            <AiFillGithub size="2em" className={hover} />
          </Link>
        </div>
      </div>
    </>
  );
}
