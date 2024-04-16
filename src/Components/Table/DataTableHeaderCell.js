
import { css, jsx } from '@emotion/react';
import {IoMdInformationCircle} from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import Tooltip from '@mui/material/Tooltip';
import * as colors from '../../Constants/Colors/Colors';

const dataTableHeaderItem = (width, align) => css `
  width: ${width};
  padding: 10px 3px;
  font-weight: 900;
  display: flex;
  font-size: 13px;
  justify-content: ${align === 'right'? 'flex-end': align === 'center'? 'center': 'flex-start'};
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
    text-align: center;
  }
`
const tooltipIcon = css `
  width: 15px;
  height: 15px;
  padding: 0 !important;
  margin-left: 5px;
  color: ${colors.blackTitleColor};
  position: relative;
  top: 1px;
  
`



const DataTableRowCell = ({width, align, title, tooltip}) => {
    return(
        <li css={dataTableHeaderItem(width, align)}>
            {title}
            <Tooltip title={tooltip} css={tooltipIcon} placement='top'>
                <IconButton>
                    <IoMdInformationCircle />
                </IconButton>
            </Tooltip>
        </li>
    )
}

export default DataTableRowCell;
