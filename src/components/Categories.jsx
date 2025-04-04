import React from "react";
import { categories } from "../assets/data";

const Categories = ({ category, setCategory }) => {
  return (
    <section id="categories" className="max-padd-container pt-5">
      <div className="flexBetween pb-5">
        <h4 className=" text-2xl font-extrabold leading-none font-ace flex flex-col">
          <span className="medium-16">Selected</span> Categories{" "}
        </h4>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-3 xl:grid-cols-8 gap-2">
        {categories.map((item) => (
          <div
            onClick={() =>
              setCategory((prev) => (prev === item.name ? "All" : item.name))
            }
            id={item.name}
            key={item.name}
            className="flexCenter flex-col"
          >
            <div className=" p-2 rounded-2xl cursor-pointer  bg-primary">
              <img
                src={item.image}
                alt="categoryImg"
                width={60}
                height={60}
                className=" object-cover h-15"
              />
            </div>
            <h4
              className={`mt-6 medium-18 ${
                category === item.name
                  ? "border-b-4 border-secondary"
                  : "border-b-4 border-white"
              }`}
            >
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
