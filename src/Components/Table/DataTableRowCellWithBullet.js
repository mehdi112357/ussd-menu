
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import {RiCheckboxBlankCircleFill} from "react-icons/ri";
import Box from "@mui/material/Box";



const itemStyle = (width) => css`
  width: ${width};
  margin: 5px 0;
  font-size: 14px;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${colors.titleColorOnWhite};
  @media (max-width: 768px) {
    width: 100% !important;
    justify-content: center;
  }
  h4{
    font-size: 15px;
    font-weight: 900;
    text-transform: capitalize;
    margin-right: 5px;
    color: ${colors.titleColorOnWhite};
  }
`
const bulletStyle = (type) => css `
  color: ${type === 'buy'? colors.infoColor: type==='sell'? colors.greenMaterial: 
    colors.darkSilver};
  font-size: 8px;
  margin-right: 5px;
`
const iconFrame = css `
  svg{
    color: ${colors.grayMaterial};
    font-size: 20px;
    position: relative;
    top: 1px;
  }
`
const details = css `
  display: flex;
  align-items: center;
`




const DataTableRowCellWithBullet = ({width, title, type, mainTitle, icon}) => {
    return(
        <div css={itemStyle(width)}>
            <Box sx={{ display: { xs: 'flex', sm: 'flex',
                    md: 'none', lg: 'none', xl: 'none'}}}>
                <div css={details}>
                    <div css={iconFrame}>
                        {icon}
                    </div>
                    <h4>{mainTitle}: </h4>
                </div>
            </Box>
            <RiCheckboxBlankCircleFill css={bulletStyle(type)}/>
            {title}
        </div>
    )
}

export default DataTableRowCellWithBullet;