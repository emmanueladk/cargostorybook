
import React from 'react';

interface InputInterface {
    className?: string,
    id?: string,
    type : string
}


export const Input = ({
    className="btn btn-primary",
    type = "text"
}:InputInterface ) => {
    return (
        <input type={type} className={className} />
    )
}