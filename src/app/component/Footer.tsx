
import React from "react";
import Image from "next/image";

import ShopCo from "../../../public/SHOP.CO.png";
import emailIcone from "../../../public/emailIcone.png";
import twitter from "../../../public/twiiter.png";
import fb from "../../../public/fb.png";
import insta from "../../../public/insta.png";
import github from "../../../public/github.png";
import visa from "../../../public/visa.png";
import master from "../../../public/master.png";
import paypal from "../../../public/paypal.png";
import applepay from "../../../public/applepay.png";
import gpay from "../../../public/gpay.png";

const Footer = () => {
  return (
    <div className="bg-[#F0F0F0] w-full px-6 md:px-16 py-10">
      {/* Newsletter Section */}
      <div className="bg-black text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center md:justify-between max-w-5xl mx-auto relative -top-16 md:-top-20">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left leading-snug">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="mt-4 md:mt-0 flex flex-col gap-3 w-full max-w-sm">
          <div className="flex items-center bg-white text-black rounded-full px-4 py-2 w-full">
            <Image src={emailIcone} alt="email" width={20} height={20} />
            <input
              type="email"
              placeholder="Enter your email address"
              className="ml-2 flex-1 focus:outline-none bg-transparent w-full"
            />
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full w-full hover:bg-gray-200 transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="mt-10 md:mt-0 flex flex-col md:flex-row md:justify-between gap-8 max-w-5xl mx-auto">
        {/* Logo & Socials */}
        <div className="text-center md:text-left">
          <Image src={ShopCo} alt="logo" width={150} height={30} />
          <p className="text-sm opacity-60 mt-4 max-w-xs">
            We have Stones that suit your style and that you’re proud to wear.
            From women to men.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {[twitter, fb, insta, github].map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt="social"
                width={30}
                height={30}
                className="cursor-pointer hover:scale-110 transition"
              />
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center md:text-left w-full">
          {[
            { title: "COMPANY", items: ["About", "Features", "Works", "Career"] },
            { title: "HELP", items: ["Customer Support", "FAQs", "Orders", "Payments"] },
            { title: "FAQ", items: ["Account", "Manage Deliveries", "Orders", "Payment"] },
            { title: "RESOURCES", items: ["Free eBook", "Tutorials", "Blogs", "YouTube"] },
          ].map((section, index) => (
            <div key={index}>
              <h1 className="font-semibold text-sm uppercase">{section.title}</h1>
              <ul className="mt-3 space-y-2 text-sm">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-gray-500 transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Divider */}
      <hr className="mt-10 border-gray-300" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm opacity-60 max-w-5xl mx-auto text-center md:text-left">
        <p>© 2000-2021, All rights reserved</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-0">
          {[visa, master, paypal, applepay, gpay].map((payment, index) => (
            <Image
              key={index}
              src={payment}
              alt="payment"
              width={50}
              height={30}
              className="hover:scale-110 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
