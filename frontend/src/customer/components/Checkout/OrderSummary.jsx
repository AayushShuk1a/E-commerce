import React from "react";
import AddressCard from "./AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-md rounded-s-md border">
        <AddressCard />
      </div>

      <div>
      <div className="mt-10">
      <div className="lg:grid grid-cols-3  relative">
        <div className="col-span-2">
          <CartItem/>
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-5">
            <p className="uppercase font-bold opacity-60 pb-4">
              product Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>467$</span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">120$</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Deleivery Charge</span>
                <span className="text-green-600">120$</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Total Amount</span>
                <span className="text-green-600">467$</span>
              </div>
            </div>

            <div>
              <Button
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default OrderSummary;
