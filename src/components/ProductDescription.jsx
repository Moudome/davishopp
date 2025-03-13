import React from "react";

const ProductDescription = () => {
  return (
    <div className=" max-padd-container mt-20">
      <div className=" flex gap-3 mb-4">
        <button className="btn-dark rounded-sm !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn-outline rounded-sm !text-xs !py-[6px] w-36">
          Cart Guide
        </button>
        <button className="btn-outline rounded-sm !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className=" flex flex-col pb-16">
        <p className=" text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
          soluta! Aspernatur doloribus dolorem aut facilis asperiores ratione
          velit illum, excepturi autem officiis cum ea deserunt, laudantium illo
          veniam quidem provident? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ipsa reprehenderit odio minus quisquam quam
          voluptatem, ea quaerat laborum dolor quo, iure id. Iste magni eius
          laborum, debitis fugit necessitatibus commodi.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint
          consequuntur, laborum rem quisquam magni eum voluptate labore totam et
          neque placeat, ad beatae ducimus! Id, alias reprehenderit. Harum,
          earum.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
