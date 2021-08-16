import React from 'react';
import './PageSlider.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Pagination} from 'swiper/core';
import js from '../common/slider/js.png'
import html from '../common/slider/html.jpg'
import react from '../common/slider/react.jpg'
import {Button} from '../common/button/Button';

SwiperCore.use([Pagination]);

export const PageSlider = () => {
    return (

        <div className={'slider'}>
            <Swiper pagination={{"dynamicBullets": true}}>
                <div className={'slides'}>

                    <div className={'slide'}>
                        <SwiperSlide>
                            <img src={html} alt=""/>
                            <div className={'linkContent'}>
                                <Button className={'LearnMore'}
                                >Learn more
                                </Button>
                            </div>
                        </SwiperSlide>
                    </div>

                    <div className={'slide'}>
                        <SwiperSlide>
                            <img src={js} alt=""/>
                            <div className={'linkContent'}>
                                <Button className={'LearnMore'}
                                >Learn more
                                </Button>
                            </div>
                        </SwiperSlide>
                    </div>

                    <div className={'slide'}>
                        <SwiperSlide>
                            <img src={react} alt=""/>
                            <div className={'linkContent'}>
                                <Button className={'LearnMore'}
                                >Learn more
                                </Button>
                            </div>
                        </SwiperSlide>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

