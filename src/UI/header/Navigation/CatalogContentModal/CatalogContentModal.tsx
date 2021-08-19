import React from 'react';
import {Dispatch} from 'react';
import {SetStateAction} from 'react';
import './CatalogContentModal.scss'

type PropsCatalogContentModalType = {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>
}

export const CatalogContentModal: React.FC<PropsCatalogContentModalType> = props => {

    const {active, setActive} = props

    return (
        <div className={active ? 'modal' : 'active'}
             onClick={() => {
                 setActive(false)
             }}>
            <div className={'modalContent'}>
                a
            </div>
        </div>
    )
}

