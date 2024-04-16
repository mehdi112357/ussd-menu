import React from 'react';
import {Button} from "antd";

const SimpleButton = ({size, title, onClick}) => {
    return(
        <Button
            type="primary"
            size={size}
            onClick={onClick}
            className='bg-green-500 hover:!bg-green-600 !text-[16px] font-normal'>
            {title}
        </Button>
    )
}

export default SimpleButton;