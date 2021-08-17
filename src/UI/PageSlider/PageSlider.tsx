import React from 'react';
import './PageSlider.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import kids from '../common/slider/kids.jpg'
import woman from '../common/slider/women.jpg'
import man from '../common/slider/man.jpg'
import {Button} from '../common/button/Button';
import {Header} from "../header/Header";

// import Swiper core and required modules
import SwiperCore, {EffectFade, Navigation, Pagination} from 'swiper/core';

// Import Swiper styles
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

export const PageSlider = () => {
    return (

        <div className={'slider'}>
            <Header/>
            <Swiper spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{"clickable": true}}>
                <div className={'slides'}>

                    <div className={'slide'}>
                        <SwiperSlide>
                            <img src={woman} alt=""/>
                            <div className={'linkContent'}>
                                <div className={'titleSlide'}>
                                    Woman products
                                </div>
                                <Button className={'LearnMore'}
                                >Learn more
                                </Button>
                            </div>
                        </SwiperSlide>
                    </div>

                    <div className={'slide'}>
                        <SwiperSlide>
                            <img src={man} alt=""/>
                            <div className={'linkContent'}>
                                <div className={'titleSlide'}>
                                    Man`s products
                                </div>
                                <Button className={'LearnMore'}
                                >Learn more
                                </Button>
                            </div>
                        </SwiperSlide>
                    </div>

                    <div className={'slide'}>
                        <SwiperSlide>
                            <img src={kids} alt=""/>
                            <div className={'linkContent'}>
                                <div className={'titleSlide'}>
                                    Kids products
                                </div>
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

