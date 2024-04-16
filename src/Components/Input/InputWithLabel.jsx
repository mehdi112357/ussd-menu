/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import {Input, InputNumber} from "antd";
import React from "react";
import * as colors from "../../Constants/Colors/Colors";
import StaticTexts from "../../Constants/En/StaticTexts";

const itemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const showDetailTitle = css`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 900;
  color: ${colors.titleColorOnWhite};
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border: 1px solid ${colors.lightSilver};
  padding: 20px 25px;
  border-radius: 6px;
`
const inputLabel = css`
  width: max-content;
  flex-grow: 1;
`
const inputTextStyle = css`
  width: max-content;
  flex-grow: 3;
  font-size: 14px;
`


const InputWithLabel = ({ label, onChange, value, disabled=false,
                            isNumeric=false}) => {
    return(
        <div css={itemStyle}>
            <label
                htmlFor={label}
                css={inputLabel}>{label}: </label>
            {
                isNumeric?
                    <InputNumber
                        min={1}
                        size='large'
                        placeholder={label}
                        css={inputTextStyle}
                        onChange={(e) => onChange(e)}
                        value={value} />:
                    <Input
                        size='large'
                        id={label}
                        value={value}
                        disabled={disabled}
                        css={inputTextStyle}
                        onChange={(e) => onChange(e.target.value)}
                    />
            }
        </div>
    )
}

export default InputWithLabel;