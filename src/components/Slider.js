import React, { useState } from "react";
import Card from "./Card";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import data from "../components/cardData"

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideLeft = () => {
    let slider = document.querySelector('#slider')
    slider.scrollLeft -= 500
  }
  
  const slideRight = () => {
    let slider = document.querySelector('#slider')
    slider.scrollLeft += 500
  }

  return (
    <div>
      <div className="relative flex items-center">
        <MdChevronLeft onClick={slideLeft} size={30} />
        <div id="slider" className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {data.map((card, index) => (
            <Card key={index} data={card} isActive={index === currentIndex} />
          ))}
        </div>
        <MdChevronRight onClick={slideRight} size={30} />
      </div>
    </div>
  );
};

export default Slider;
