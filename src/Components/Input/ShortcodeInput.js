/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useState} from 'react';
import {Input} from "antd";
import * as colors from '../../Constants/Colors/Colors';


const formFrame = (width) => css`
  position: relative;
  width: ${width}px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;
  & input{
    box-shadow: none;
    border-radius: 0;
    border: none;
    border-bottom: 2px solid ${colors.darkSilver};
  }
  & input:hover, input:focus{
    box-shadow: none !important;
    border-radius: 0;
    border: none;
    font-family: "Dosis", Arial, Helvetica, sans-serif !important;
    border-bottom: 2px solid ${colors.darkSilver};
  }
  @media (max-width: 768px) {
    width: 100% !important;
  }
`
const inputStyle = (dir) => css`
  width: 100%;
  direction: ${dir} !important;
  text-align: left;
  &::placeholder{
    text-align: right !important;
  }
`


const ShortcodeInput = (props) => {

    const { onChange, width = '100%' } = props;

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const decimalPattern = /^[0-9.]*$/;
        if (decimalPattern.test(e.target.value)){
            onChange(e);
            setInputValue(e.target.value);
        }
    }

    return (
        <div css={formFrame(width)}>
            <Input
                type='text'
                placeholder=''
                size='large'
                value={inputValue}
                onChange={handleChange}
                css={inputStyle}
            />
        </div>
    )
}

export default ShortcodeInput;