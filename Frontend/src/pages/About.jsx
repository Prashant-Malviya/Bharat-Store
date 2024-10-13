import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            cum et atque ipsa quo consequatur voluptatibus, iste consequuntur
            odio saepe sequi fugiat error sapiente alias! Veniam laborum maxime
            dolorum adipisci?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quas
            facilis et consequatur. Repudiandae obcaecati dolorem sequi
            perspiciatis amet? Atque obcaecati ea, optio veritatis a est
            consequuntur nam, soluta maxime dignissimos reprehenderit odio
            deserunt assumenda voluptates possimus ipsum, corporis voluptatum
            rerum ipsa repellendus tenetur. Ullam magni nobis eaque voluptas
            officiis?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non animi repudiandae esse suscipit expedita veniam in dicta vel. Quae atque facere blanditiis consectetur, saepe beatae eum deleniti porro error labore accusamus dolores, inventore ab.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maxime dolorum placeat, eaque voluptatibus nisi autem blanditiis est rerum consequuntur.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisi est rerum consequuntur.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus laudantium molestias ducimus sunt excepturi a nisi unde recusandae dolorem.adipisi est rerum consequuntur.</p>
          </div>
        </div>

        <NewsletterBox />

    </div>
  );
}

export default About;
