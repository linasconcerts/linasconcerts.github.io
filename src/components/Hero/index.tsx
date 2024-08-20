import { url } from "inspector";
import React from "react";

import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-betweenv">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-6xl lg:text-8xl">
            Hallöchen, <br />
            Ich bin Lina <br />
          </h1>

          <p className="py-5 text-2xl lg:text-4xl newamsterdam">
            Ich mache deine Konzertfotos!*
          </p>

          <p className="py-2 newamsterdam">*Wenn du guten Geschmack hast</p>
          <br />
          <div className="flex py-5 ">
            <a
              href="https://www.instagram.com/linasconcerts"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
            <a
              href="mailto:linanarkiewicz@gmail.com"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineMail size={40} />{" "}
            </a>
          </div>
        </div>
        <div className="">
          <img
            src="images/3.jpg"
            alt="hero-image"
            className="h-auto max-w-xl rounded-full shadow-xl dark:shadow-gray-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
