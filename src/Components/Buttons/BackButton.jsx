import React from 'react';
import {LuChevronLeft} from "react-icons/lu";


const BackButton = ({title, onClick}) => {
    return(
        <button
            className='flex flex-row items-center font-medium text-[16px] text-gray-700'
            onClick={onClick}>
            <LuChevronLeft className='text-gray-800 text-3xl relative' />
            {title}
        </button>
    )
}

export default BackButton;