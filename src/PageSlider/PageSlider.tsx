import React from 'react';
import './PageSlider.scss'
import backArrow from '../common/backArrow.png'
import nextArrow from '../common/nextArrow.png'

export const PageSlider = () => {

    const prevSlide = () => {

    }
    const nextSlide = () => {

    }

    return (
        <div className={'slider'}>
            <div className={'slideChanger'}>
                <a href="" onClick={prevSlide}>
                    <img src={backArrow} alt=""/>
                </a>
                <a href="" onClick={nextSlide}>
                    <img src={nextArrow} alt="" onClick={nextSlide}/>
                </a>
            </div>
            <div>
                <div>slide 1</div>
                <div>slide 2</div>
                <div>slide 3</div>
            </div>
        </div>
    )
}

