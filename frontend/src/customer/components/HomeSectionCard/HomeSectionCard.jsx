import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center overflow-hidden rounded-lg shadow-lg bg-white border mx-3 w-[15rem]">

      <div className="h-[12rem] w-[10rem]"> 
        <img className="object-cover object-top w-full h-full" src="https://www.ethnicplus.in/media/catalog/product/cache/77b9a44d9276879ccdde931a01149182/2/0/2022_1__3.jpg" alt=""/>

      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 ">Ethnic Plus</h3>
        <p className="mt-2 text-sm text-gray-500">Euphoric White Heavy Sequins Embroidered Silk Wedding Lehenga Choli</p>
      </div>


    </div>
  );
};

export default HomeSectionCard;
