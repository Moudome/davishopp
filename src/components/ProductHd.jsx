import React from "react";
import { TbArrowRight } from "react-icons/tb";

const ProductHd = ({ product }) => {
  return (
    <div className="max-padd-container flex items-center flex-wrap gap-x-1 medium-16 py-2 capitalize bg-primary rounded-tl-xl rounded-tr-xl ">
      Home <TbArrowRight />
      {product.name}
    </div>
  );
};

export default ProductHd;
