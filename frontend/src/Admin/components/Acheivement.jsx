import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
  bgcolor:"#2d3436"
});

const Acheivement = () => {
  return (
    <Card sx={{ position: "relative", bgcolor:"black", color:"white" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop with PDK
        </Typography>
        <Typography variant="body2">Congratulations</Typography>
        <Typography variant="h5" sx={{my:3}}>420.9k</Typography>
        <Button size="small" variant="contained">View Sales</Button>

        <TriangleImg src=""></TriangleImg>
        <TrophyImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9gxFMH-ZDHwNXv8YNWui6bFwm3w1rEExgQ&s"/>
      </CardContent>
    </Card>
  );
};

export default Acheivement;
