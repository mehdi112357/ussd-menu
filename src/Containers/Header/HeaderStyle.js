import {css, jsx} from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import {blackTitleColor} from "../../Constants/Colors/Colors";


export const headerMainFrame = css`
  width: 100%;
  min-height: 70px;
  background-color: transparent;
  //box-shadow: 0 2px 4px #f3f3f3;
`
export const dashboardSideSignature = css`
  font-size: 26px !important;
  font-weight: 600;
  font-family: "Dosis", Arial, Helvetica, sans-serif;
  color: ${colors.blackTitleColor};
  margin: 0;
`

export const dashboardHeaderStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 70px;
  padding: 0 15px;
  box-sizing: border-box;
  align-items: center;
`
export const dashboardHeaderLeftSide = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  &:hover{
    svg{
      font-size: 20px;
      color: ${colors.antBlue};
    }
  }
  button{
    margin: 0 5px;
  }
  svg{
    font-size: 20px;
    font-weight: 100;
    color: ${colors.middleSilver};
  }
`

export const hamburgerMenuIcon = css`
  color: ${colors.darkSilver};
  font-size: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  top: 7px;
  margin-left: 10px;
  position: relative;

  svg {
    color: #fff !important;
  }
`
export const drawerFrame = css`
  width: 200px;
  padding: 15px;`
export const closeDrawerButton = css`
  position: absolute;
  bottom: 30px;
  left: 20px;
  border-radius: 100px;
  min-width: 45px;
  min-height: 45px`
export const closeDrawerIcon = css`
  color: #fff !important;
  font-size: 22px`