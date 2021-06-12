import React from 'react'
import Slider from 'react-slick'
import { SlideInfo } from "../Data/SlideInfo";
import './Slider.css'
import Rotate from 'react-reveal/Rotate';
import Roll from 'react-reveal/Roll';

export const SliderImg = () => {
     var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
        {SlideInfo.map(item => {
            return(
                <div  className='slider'>
                    <img src={item.img} alt={item.title}/>
                    <div className='box-text'>
                        <Roll top>
                        <h5>{item.title}</h5>
                        <h3>{item.des}</h3>
                        </Roll>
                        <Rotate>
                        <button className='btn-slid'>Shop Now</button>
                        </Rotate>
                    </div>
                </div>
            )
        })}
    </Slider>
  );
}
export default SliderImg