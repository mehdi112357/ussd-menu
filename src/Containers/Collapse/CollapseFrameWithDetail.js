
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { VscAdd, VscChromeClose} from "react-icons/vsc";
import Collapse from '@mui/material/Collapse';
import * as colors from '../../Constants/Colors/Colors';


const collapseFrameStyle = css `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  @media(max-width: 768px){
    width: 94%;
  }
`
const collapseButton = (open) => css `
  position: absolute;
  width: 55px;
  height: 55px;
  border-radius: 100px;
  z-index: 101;
  background-color: ${open? '#000': colors.state200} !important;
  border: none;
  cursor: pointer;
  top: 30px;
  svg{
    font-size: 28px;
    color: ${open? '#fff': colors.darkSilver}
  }
  transition-duration: 0.5s;
`
const detailFrame = (open, type) => css`
  padding: 0 30px 30px;
  background-color: ${open? colors.blue200: 'transparent'};
  position: relative;
  top: 15px;
  left: 20px;
  padding-left: 50px;
  border-radius: 35px;
  transition-duration: 0.4s;
  h5{
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 32px;
    line-height: 1.25;
    font-weight: 400;
    color: ${colors.blackTitleColor};
  }
  p{
    margin-bottom: 8px;
    margin-left: 16px;
    font-size: 14px;
    line-height: 24px;
    padding-top: ${type === 'top'? '30px': '10px'};
  }
`


const CollapseFrameWithDetail = ({ title, text, type}) => {

    const [ open, setOpen ] = useState(false);
    return(
        <div css={collapseFrameStyle}>
            <button css={collapseButton(open)} onClick={() => setOpen(!open)}>
                {
                    open?
                        <VscChromeClose />:<VscAdd />
                }
            </button>
            <div css={detailFrame(open, type)}>
                {
                    type === 'top'?
                        <Collapse in={open}>
                            <p>{text}</p>
                        </Collapse>: null
                }
                <h5>{title}</h5>
                {
                    type === 'bottom'?
                        <Collapse in={open}>
                            <p>{text}</p>
                        </Collapse>: null
                }
            </div>

        </div>
    )
}

export default CollapseFrameWithDetail;