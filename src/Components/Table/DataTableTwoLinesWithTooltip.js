
import * as React from 'react';
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import Box from "@mui/material/Box";
import {AiFillInfoCircle} from "react-icons/ai";
import Tooltip from '@mui/material/Tooltip';
import IconButton from "@mui/material/IconButton";




const itemStyle = (width, align) => css`
  width: ${width};
  margin: 5px 0;
  font-size: 14px;
  color: ${colors.infoColor} !important;
  font-weight: 900;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: ${align === 'right'? 'flex-start': align === 'center'? 'center': 'flex-end'};
  align-items: center;
  color: ${colors.titleColorOnWhite};
  @media (max-width: 768px) {
      width: 100% !important;
      text-align: center;
      margin: 10px 0;
      justify-content: center !important;
      flex-direction: column-reverse;
    }`

const details = css `
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  h4{
    color: ${colors.darkSilver};
    font-size: 13px;
    text-transform: capitalize;
  }
  h5{
    color: ${colors.darkSilver};
    font-size: 13px;
    margin-top: 5px;
  }
`
const infoIcon = css `
  padding: 0 !important;
  margin-left: 5px;
  svg{
    font-size: 16px;
    color: #000;
    transition-duration: 0.1s;
    &:hover{
      color: ${colors.primaryLight};
    }
  }
`



const DataTableTwoLinesWithTooltip = ({width, title, subTitle, tooltip, align}) => {
    return(
        <div css={itemStyle(width, align)}>
            <Box sx={{ display: { xs: 'flex', sm: 'flex',
                    md: 'none', lg: 'none', xl: 'none'}}}>
                <div css={details}>
                    <div className='inRowFlexItems'>
                        <h4>{title} (%) </h4>
                        <Tooltip title='this is test'>
                            <AiFillInfoCircle />
                        </Tooltip>
                    </div>
                    <h5>{subTitle}</h5>
                </div>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'none',
                    md: 'flex', lg: 'flex', xl: 'flex'}}}>
                <div css={details}>
                    <div className='inRowFlexItems'>
                        <h4>{title} (%) </h4>
                        <Tooltip title={tooltip} arrow>
                            <IconButton  css={infoIcon}>
                                <AiFillInfoCircle />
                            </IconButton>
                        </Tooltip>

                    </div>
                    <h5>{subTitle}</h5>
                </div>
            </Box>
        </div>
    )
}

export default DataTableTwoLinesWithTooltip;
