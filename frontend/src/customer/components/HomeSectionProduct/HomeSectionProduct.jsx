import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { mens_kurtaData } from "../../../Data/mens_kurta";

const HomeSectionProduct = ({data,sectionName}) => {
  const [activeIndex,setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5},
  };

  const slidePrev =()=>setActiveIndex(activeIndex-1);
  const slideNext =()=>setActiveIndex(activeIndex+1)

  const syncActiveIndex =({item})=>setActiveIndex(item)

  const items = data.map((item) => <HomeSectionCard product={item}/>);
 
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative px-1">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
       { activeIndex !==items.length -5 && <IconButton
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor :"white"}}
          aria-label="next">
          <KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)", color:"black"}} />
        </IconButton>}

        {activeIndex !==0 && <IconButton
          variant="contained" 
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor :"white"}}
            aria-label="prev">
          <KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)", color:"black"}} />
        </IconButton>}
      </div>
    </div>
  );
};

export default HomeSectionProduct;
