import React from "react";

const HomeSectionCard = ({product}) => {
  
  return (
    <div className="cursor-pointer flex flex-col items-center overflow-hidden rounded-lg shadow-lg bg-white border mx-3 w-[15rem]">

      <div className="h-[12rem] w-[10rem]"> 
        <img className="object-cover object-top w-full h-full" src={product.imageUrl} alt=""/>

      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 ">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>


    </div>
  );
};

export default HomeSectionCard;
