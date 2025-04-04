import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer
      id="contact"
      className=" max-padd-container bg-tertiary  text-white py-12  rounded-xl"
    >
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=" flex flex-col items-center md:items-start">
          <Link to={"/"} className="bold-24 mb-4">
            <h3>
              Achim<span className="text-secondary">Shop</span>{" "}
            </h3>
          </Link>
          <p className=" text-center md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            porro dolores ipsum blanditiis recusandae velit quibusdam inventore
            eligendi dolor dolore delectus ab,
          </p>
        </div>
        <div className=" flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4"> Quick links</h4>
          <ul className=" space-y-2 regular-15 text-gray-30">
            <li>
              <a href="/" className=" hover:text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/" className=" hover:text-secondary">
                Categories
              </a>
            </li>
            <li>
              <a href="/" className=" hover:text-secondary">
                Shop
              </a>
            </li>
            <li>
              <a href="/" className=" hover:text-secondary">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col items-center md:items-start">
          <h4 className="text-lg mb-4">Contact Us</h4>
          <p>
            Email:{" "}
            <a href="" className=" hover:text-secondary">
              achimmoundomesalom@gmail.com
            </a>{" "}
          </p>
          <p>
            Phone:{" "}
            <a href="" className=" hover:text-secondary">
              00237697647717
            </a>{" "}
          </p>
          <p>Address 123 Garoua,Nord,Cameroun </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <SocialIcons />
        <hr className=" h-[1px] w-full max-w-screen-md my-4 border-white" />
        <p>&copy;{new Date().getFullYear()} FusionMart | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
