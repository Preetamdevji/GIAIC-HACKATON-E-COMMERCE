import React from "react";
import MainCarousel from "../../components/HomeCarousel/maincarousel";
import HomeSectionProduct from "../../components/HomeSectionProduct/HomeSectionProduct";
import { mens_kurtaData } from "../../../Data/mens_kurta";

const HomePage = ()=>{
    return (
        <div>
            <MainCarousel/>
        

        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionProduct data={mens_kurtaData} sectionName={"Men's Kurta"}/>
            <HomeSectionProduct data={mens_kurtaData} sectionName={"Men's Shoes"}/>
            <HomeSectionProduct data={mens_kurtaData} sectionName={"Men's Shirt"}/>
            <HomeSectionProduct data={mens_kurtaData} sectionName={"Women's Saree"}/>
            <HomeSectionProduct data={mens_kurtaData} sectionName={"Women's Dress"}/>
        </div>
        </div>
    )
}

export default HomePage;