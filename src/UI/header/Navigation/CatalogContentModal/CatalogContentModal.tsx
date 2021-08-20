import React, {SetStateAction, useState} from 'react';
import {Dispatch} from 'react';
import './CatalogContentModal.scss'

type PropsCatalogContentModalType = {
    selected: string
    setSelected: Dispatch<SetStateAction<string>>
}

export const CatalogContentModal: React.FC<PropsCatalogContentModalType> = props => {

    const {selected, setSelected} = props

    const [isActive, setIsActive] = useState(false);
    const options = ["React", "Vue", "Angular"];

    // <div className={active ? 'modal active' : 'active'}
    //      onClick={() => {
    //          setActive(false)
    //      }}>
    //     <div className={active ? 'modalContent active' : 'modalContent'}
    //          onClick={e => e.stopPropagation()
    //          }>
    //     </div>
    // </div>
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
                {/*<a className="fas fa-caret-down"></a>*/}
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                            className="dropdown-item"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

