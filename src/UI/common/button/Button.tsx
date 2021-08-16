import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import './Button.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: React.FC<DefaultButtonPropsType> = ({className, ...restProps}) => {
    return (
        <button className={className}
                {...restProps}
        />
    );
}

