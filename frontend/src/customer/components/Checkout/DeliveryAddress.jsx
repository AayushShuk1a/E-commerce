import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";

const DeliveryAddress = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            address:data.get("Address"),
            city:data.get("City"),
            state:data.get("state"),
            zip:data.get("Zip"),
            phoneNumber:data.get("phoneNumber")
        }

        console.log(address);
    }

  return (
    <div className="">
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md has-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deleiver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    
                    required
                    id="Address"
                    name="Address"
                    label="Address"
                    autoComplete=""
                    fullWidth
                    rows={4}
                    multiline
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    id="City"
                    name="City"
                    label="City"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    id="state"
                    name="state"
                    label="state"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    id="Zip"
                    name="Zip"
                    label="Zip Code"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone No."
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                <Button
              sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }}
              size="large"
              variant="contained"
              type="submit"
            >
              Deleiver Here
            </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddress;
