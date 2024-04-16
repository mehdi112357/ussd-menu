/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import * as colors from '../Constants/Colors/Colors';
import {titleColorOnWhite} from "../Constants/Colors/Colors";

export const dashboardContentFrame = css `
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const dashContentFrame = css `
  width: 100%;
  min-height: calc(100vh - 70px);
  height: 100%;
  padding: 25px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f4f4f4;
  @media (max-width: 768px) {
    margin: 0;
  }
`
export const dashSectionTitle = css `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 10px;
  h2{
    display: flex;
    align-items: center;
    width: max-content;
    background-color: #fff;
    border-radius: 11px;
    padding: 15px 25px 15px 18px;
    font-size: 16px;
    font-weight: 600;
    color: ${colors.titleColorOnWhite};
    svg{
      color: #f18114;
      margin-right: 7px;
      font-size: 22px;
    }
  }
  h4{
    margin-top: 20px;
    font-size: 16px !important;
    padding-left: 25px;
    color: ${colors.darkSilver};
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`

/****************** Data table Style **********************/
export const dataTableHeader = css `
  width: 100%;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  background: #e4e4e4;
  border-radius: 10px;
  box-shadow: 0 6px 4px #e0e0e0;
`
export const dataTableHeaderCell = (width) => css `
  width: ${width};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkSilver};
  font-size: 15px;
  font-weight: 900;
`
export const tableContentFrame = css `
  padding: 10px 0;
  & ul:last-of-type{
    border-bottom: none !important;
  }
`
export const dataTableContentRow = css `
  width: 100%;
  list-style: none;
  padding: 10px 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  transition-duration: 0.2s;
  &:hover{
    background-color: #f0f0f0;
    cursor: default;
  }
`
export const dataTableContentRowCell = (width) => css `
  width: ${width};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkSilver};
  font-size: 14px;
  font-weight: 600;
`
