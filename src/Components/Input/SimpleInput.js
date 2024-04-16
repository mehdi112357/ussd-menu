/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useState} from 'react';
import {Input} from "antd";
import InputTooltip from "../Tooltip/InputTooltip";
import * as colors from "../../Constants/Colors/Colors";


const formFrame = (width, inRow) => css`
  position: relative;
  width: ${width};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // margin: ${inRow ? '10px' : 0};
  @media (max-width: 768px) {
    width: 100% !important;
  }
`
const inputStyle = (dir) => css`
  width: 100%;
  height: 41px;
  direction: ${dir} !important;
  text-align: ${dir === 'rtl'? 'right': 'left'};
  &::placeholder{
    text-align: ${dir === 'rtl'? 'right': 'left'} !important;
  }
`
const labelStyle = (value) => css`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -1px;
  position: absolute;
  top: ${value? '-23px': '5px'};
  transition-duration: 0.2s;
  right: ${value? 0: '2px'};
  align-items: center;
  display: flex;
  justify-content: center;
  svg{
    color: ${colors.darkSilver};
  }
`


const SimpleInput = (props) => {

    const { label, onChange, floatLabel, width = 190, isNumber=false, value,
        inRow = false, type = 'text', dir='ltr', tooltip=false } = props;

    // const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const decimalPattern = /^[0-9.]*$/;
        if (isNumber){
            if (decimalPattern.test(e.target.value)){
                onChange(e);
                // setInputValue(e.target.value);
            }
        }
        else{
            onChange(e);
            // setInputValue(e.target.value);
        }
    }

    return (
        <div css={formFrame(width, inRow)}>
            {/*{floatLabel !== '' ?*/}
            {/*    <label css={labelStyle(value, dir)} htmlFor='simpleSelectLabel'>*/}
            {/*        {tooltip? <InputTooltip message={tooltip} />: null}*/}
            {/*        {label}*/}
            {/*    </label> : null}*/}
            <Input
                type={type}
                placeholder={label}
                size='large'
                value={value}
                onChange={handleChange}
                css={inputStyle(dir)}
            />
        </div>
    )
}

export default SimpleInput;