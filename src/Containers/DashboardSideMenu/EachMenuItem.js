/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React from 'react';
import {Link, useLocation } from 'react-router-dom';
import * as colors from '../../Constants/Colors/Colors';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const dashboardItemStyle = (title) => css `
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 52px;
  font-size: 14px;
  color: ${title? '#7a5af8': colors.darkSilver} !important;
  background-color: ${title? '#ebe9fe': 'transparent'} !important;
  font-weight: 600;
  border-width: 1px;
  border-style: solid;
  border-color: ${title? '#7a5af8': 'transparent'} !important;
  text-decoration: none;
  padding: 0 15px;
  border-radius: 8px;
  margin-bottom: 3px;
  box-sizing: border-box;
  &:hover{
    color: #7a5af8 !important;
    background-color: #ebe9fe !important;
    border-width: 1px;
    border-style: solid;
    border-color: #7a5af8 !important;;
  }
  svg{
    position: relative;
    top: -2px;
    margin-right: 5px;
    font-size: 20px;
  }
`
const dashboardItemStyleText = css `
  display: flex;
  align-items: center;
`

const EachMenuItem = (props) => {

    const {title, icon, link} = props;
    const url = useLocation();

    return(
        <Link to={link} css={dashboardItemStyle(url.pathname === link)}>
            <div css={dashboardItemStyleText}>
                {icon}
                {title}
            </div>
        </Link>
    )
}

export default EachMenuItem;
