import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {HomeCarouselData} from './HomeCaraouselData';


const items=HomeCarouselData.map((item)=><img className='cursor-pointer' src={item.image} role='presentation' alt=''/>);


const HomeCarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default HomeCarousel;