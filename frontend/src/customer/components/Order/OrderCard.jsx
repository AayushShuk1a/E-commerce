import { Grid } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <div className="mt-10">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <div className="flex cursor-pointer">
          <img
            className="w-[5rem] h-[5rem] object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
            alt=""
          />
          <div className="ml-5 space-y-2">
            <p className="">Men SLide Mid RIse Black jeans</p>
            <p className="opacity-50 text-xs font-semibold">Size:M</p>
            <p className="opacity-50 text-xs font-semibold">Color:Black</p>
          </div>
        </div>
      </Grid>


      <Grid xs={2}>
        <p>1999$</p>
      </Grid>
    </div>
  );
};

export default OrderCard;
