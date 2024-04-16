/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import {HiOutlineInformationCircle} from "react-icons/hi";
import {Tooltip} from "antd";
import React from "react";

const tooltipStyle = css`
  font-size: 20px;
`

const InputTooltip = ({message}) => {

    return(
        <Tooltip title={message} color='#2c6070' css={tooltipStyle} >
            <HiOutlineInformationCircle />
        </Tooltip>
    )
}

export default InputTooltip;
