import React from 'react';
import './Navigation.scss'
import {PrivateOffice} from "../PrivateOffice/PrivateOffice";

export const Navigation = () => {
    return (
        <div className={'navigation'}>
            <div className={'initialPage'}>
                <a href="">MYSTORE.BY</a>
            </div>
            <div className={'menu'}>
                <a href="">Catalog</a>
                <a href="">Contact</a>
                <a href="">Delivery</a>
            </div>
            <div className={'privateOffice'}>
                <PrivateOffice/>
            </div>
        </div>
    )
}

