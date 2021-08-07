import React from 'react';
import {PrivateOffice} from './PrivateOffice/ProfateOffice';
import {Navigation} from "./Navigation/Navigation";

export const Header = () => {
    return (
        <div>
            <Navigation/>
            <PrivateOffice/>
        </div>
    )
}

