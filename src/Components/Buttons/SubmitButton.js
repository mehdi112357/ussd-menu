/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React from 'react';
import {Button} from 'antd';
import {PulseLoader} from "react-spinners";
import * as colors from '../../Constants/Colors/Colors';


const buttonStyle = (width) => css`
  padding: 0 25px;
  width: ${width};
  height: 38px;
  font-size: 15px;
  font-weight: normal;
  background-color: ${colors.lightGreenColor};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: ${colors.greenMaterial} !important;
    opacity: 0.9;
  }
  svg{
    font-size: 20px;
    margin-left: 5px;
  }
  span{
    display: flex;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const SubmitButton = (props) => {

    const {title, handleClick, type='primary', width = 'fit-content',
         icon, loading} = props;

    return (
        <Button
            css={buttonStyle(width)}
            onClick={handleClick}
            type={type}>
            {
                loading?
                    <PulseLoader color='#fff' size={7} />:
                    <>
                        {title}
                        {icon}
                    </>
            }
        </Button>
    )
}

export default SubmitButton;