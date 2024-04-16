import React from 'react';

const SimpleDescription = ({ field, value}) => {
    return(
        <li className='flex flex-row ltrDirection items-center my-1'>
            <span className='font-semibold text-gray-500 text-[15px] mr-1'>{field}: </span>
            <span className='font-semibold text-gray-700 text-[16px] top-[-1px] relative'>
                {value?? ''}</span>
        </li>
    )
}

export default SimpleDescription;