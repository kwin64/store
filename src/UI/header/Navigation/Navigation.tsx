import React, {useState} from 'react';
import './Navigation.scss'
import {PrivateOffice} from "../PrivateOffice/PrivateOffice";
import {CatalogContentModal} from "./CatalogContentModal/CatalogContentModal";

export const Navigation = () => {

    const [modalActive, setModalActive] = useState(false)

    return (
        <>
            <div className={'navigation'}>
                <div className={'initialPage'}>
                    <a href="">LOGO</a>
                </div>
                <div className={'menu'}>
                    <a href="#" onClick={() => setModalActive(true)}
                    >Catalog</a>
                    <a href="#">Contact</a>
                    <a href="#">Delivery</a>
                </div>
                <div className={'privateOffice'}>
                    <PrivateOffice/>
                </div>
                <CatalogContentModal active={modalActive}
                                     setActive={setModalActive}
                />
            </div>
        </>
    )
}

