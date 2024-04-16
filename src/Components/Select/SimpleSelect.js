/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useState} from 'react';
import {Select} from 'antd';
import * as colors from "../../Constants/Colors/Colors";
import InputTooltip from "../Tooltip/InputTooltip";


const formFrame = (width, inRow) => css`
  width: ${width}px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  // margin: ${inRow ? '10px' : 0};
  @media (max-width: 768px) {
    width: 100% !important;
  }
`
const selectStyle = css`
  width: 100%;
  font-size: 12px;
  letter-spacing: -1px;
  //&::placeholder {
  //  font-size: 14px !important;
  //}
`
const labelStyle = (value) => css`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -1px;
  position: absolute;
  top: ${value? '-20px': '5px'};
  transition-duration: 0.2s;
  right: ${value? 0: '2px'};
  align-items: center;
  display: flex;
  justify-content: center;
  svg{
    color: ${colors.darkSilver};
  }
`


const SimpleSelect = (props) => {

    const [value, setValue] = useState('');
    const {label, options, onChange, floatLabel, width = 190, clearable = true,
        inRow = false, tooltip} = props;
    const {Option} = Select;

    const handleChange = (e) => {
        onChange(e);
        setValue(e)
    }
    return (
        <div css={formFrame(width, inRow)}>
            {floatLabel !== '' ?
                <label css={labelStyle(value)} htmlFor='simpleSelectLabel'>
                    {tooltip? <InputTooltip message={tooltip} />: null}
                    {label}
                </label> : null}
            <Select defaultValue={label}
                    placeholder={label}
                    size='large'
                    onChange={handleChange}
                    css={selectStyle}
                    allowClear={clearable}>
                {
                    options.map((item, index) => <Option key={index}
                                                         value={item.value}>{item.title}</Option>)
                }
            </Select>
        </div>
    )
}

export default SimpleSelect;