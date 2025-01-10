import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetail = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="fondbold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

       
      <Grid container className="space-y-5">
      {[1,11,1,1].map((item)=> 
        <Grid
          item
          container
          className="shahow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Grid item xs={6}>
            <div className="flex items-center space-x-2">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://www.panaprium.com/cdn/shop/articles/western_aesthetic_outfit_ideas_1000.jpg?v=1646095769"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">
                  Men Printed Pure Cotten Straight Kurta
                </p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color : Yellow</span>
                  <span>Size : M</span>
                </p>
                <p>Seller: linaria</p>
                <p>$100</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon
                sx={{ fontSize: "2rem" }}
                className="px-2 text-5xl"
              />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
      )}
      </Grid>
     
    </div>
  );
};

export default OrderDetail;
