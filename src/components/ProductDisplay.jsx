import React, { useContext } from "react";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const ProductDisplay = ({ category }) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div>
      <section id="shop" className="max-padd-container py-2">
        <div className="flexBetween ">
          <h4 className=" text-2xl font-extrabold leading-none font-ace flex flex-col">
            <span className="medium-16">See</span> Products{" "}
          </h4>
        </div>

        <div className=" grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 ">
          {all_products.map((product) => {
            if (category === "All" || category === product.category) {
              return (
                <div key={product._id}>
                  <Item product={product} />
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductDisplay;
