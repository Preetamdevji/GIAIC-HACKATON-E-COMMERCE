import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const items = mainCarouselData.map((item) => <img src={item.image} className='cursor-pointer'alt=''/>)
const maincarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
);

export default maincarousel;