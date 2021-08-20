import React, {useState} from 'react';
import './Navigation.scss'
import {PrivateOffice} from "../PrivateOffice/PrivateOffice";
import {CatalogContentModal} from "./CatalogContentModal/CatalogContentModal";

export const Navigation = () => {

    const [selected, setSelected] = useState("Catalog");

    return (
        <>
            <div className={'navigation'}>
                <div className={'initialPage'}>
                    <a href="">LOGO</a>
                </div>
                <div className={'menu'}>
                    {/*<a href="#">Catalog</a>*/}
                    <a href="#">Catalog<CatalogContentModal selected={selected} setSelected={setSelected}/></a>
                    <a href="#">Contact</a>
                    <a href="#">Delivery</a>
                </div>
                <div className={'privateOffice'}>
                    <PrivateOffice/>
                </div>
            </div>
        </>
    )
}

