import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const Steps = [
  "Placed",
  "Order COnfirmed,",
  "Shipper",
  "Out for Delivery",
  "Deleivered",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {Steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
