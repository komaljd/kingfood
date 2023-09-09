import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../images/banner/banner1.png';
import banner2 from '../images/banner/banner2.png';
import './Banner.css';
const Banner = () =>{
    return(
        <>
        <div className='BannerHeading' style={{ display: 'block'}}>
            <Carousel>
                <Carousel.Item interval={5000}>
                   <div className='row justify-content-center align-items-center '>
                        <div className='col-md-6 order-2'>
                        <img
                            className='imgSize'
                            src={banner2}
                            alt="Image One"
                        />
                        </div>
                        <div className='col-md-6  order-1'>
                            <div className='carousel_caption'>
                                 <h2 className='display-3'>  We have the best food in town!</h2>
                                <p>Sample Text for Image One</p>
                            </div>
                        </div>
                   </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className='row justify-content-center align-items-center'>
                            <div className='col-md-6 order-2'>
                            <img
                                className='imgSize'
                                src={banner}
                                alt="Image two"
                            />
                            </div>
                            <div className='col-md-6 order-1'>
                                <div className='carousel_caption'>
                                    <h2 className='display-2'>Life is better with ice cream</h2>
                                    <p>Sample Text for Image One</p>
                                </div>
                            </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

        </>
    );
}
export default Banner;