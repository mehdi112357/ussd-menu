
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';

const activeTabStyle = css `
  background-color: transparent;
  border-bottom: 2px solid ${colors.infoColor};
  min-height: 34px;
  font-weight: 900;
  color: ${colors.infoColor};`
const tabStyle = css `
  background-color: transparent;
  min-height: 34px;
  font-weight: 900;
  color: ${colors.middleSilver};`


const UnderlineTabItem = ({ isActive, onClick, title}) => {
    return(
        <li onClick={onClick} css={isActive? activeTabStyle: tabStyle}>
            { title }
        </li>
    )
}

export default UnderlineTabItem;