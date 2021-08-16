import React from 'react';
import './PageSlider.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import kids from '../common/slider/kids.jpg'
import woman from '../common/slider/women.jpg'
import man from '../common/slider/man.jpg'
import {Button} from '../common/button/Button';

export const PageSlider = () => {
    return (

        <div className={'slider'}>
            <Swiper pagination={{"dynamicBullets": true}}>
                <div className={'slides'}>

                    <div className={'slide'}>
                        <SwiperSlide>
                            <img src={woman} alt=""/>
                            <div className={'linkContent'}>
                                <div>
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
                                <div>
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
                                <div>
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

