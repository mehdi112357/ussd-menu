/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React from 'react';
import mobileFrame from "../../../Assets/images/mobileFrame.png";
import Space30 from "../../../Components/Spaces/Space30";
import * as colors from '../../../Constants/Colors/Colors';
import {lightSilverIconColor} from "../../../Constants/Colors/Colors";

const simulatorStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 640px;
  top: -80px;
  background-image: url(${mobileFrame});
  background-size: cover;
  @media(max-width: 768px){
    top: 0;
  }`
const dialFakeFrame = css `
  width: 282px;
  height: 160px;
  //background-color: green;
`
const simulatorInnerFrame = css `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 282px;
  height: 609px;
  border-radius: 35px;
  background-color: #fff;
`
const dialpadFrame = css `
  width: 282px;
  position: relative;
  padding: 15px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

`
const inputNumberFrame = css `
  width: 100%;
  position: relative;
  input{
    width: 100%;
    border: none;
    outline: none;
    height: 52px;
    font-size: 24px;
    text-align: center;
    padding: 0 10px 15px;
    font-family: 'Calibri';
    box-sizing: border-box;
    color: ${colors.darkSilver};
    border-bottom: 1px solid silver;
  }
`
const dialButtonFrame = css `
  width: 90px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2px;
  outline: none;
  border: none;
  background-color: transparent;
  transition-duration: 0.1s;
  cursor: pointer;
  h6 {
    color: #4484ce;
    font-weight: 600;
    margin: 0;
    font-size: 26px;
    font-family: system-ui;
  }

  span {
    font-size: 11px;
    color: ${colors.lightSilverIconColor};
    font-family: system-ui;
  }
`


const EachDialButton = (props) => {

    const { title, subTitle, onClickItem } = props;
    return (
        <button css={dialButtonFrame} onClick={onClickItem}>
            <h6>{title}</h6>
            <span>{subTitle}</span>
        </button>
    )
}

export default EachDialButton;