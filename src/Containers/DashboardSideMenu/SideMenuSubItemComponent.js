import { css, jsx } from '@emotion/react';
 import { useState } from 'react';
import {Link} from "react-router-dom";
import * as colors from '../../Constants/Colors/Colors';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';

const dashboardItemStyle = css `
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
  width: 100%;
  min-height: 46px;
  font-size: 13px;
  color: ${colors.darkSilver};
  font-weight: 600;
  text-decoration: none;
  &:hover{
    color: ${colors.darkSilver};
  }
  svg{
    font-size: 22px !important;
    color: ${colors.darkSilver};
  }
`

const SideMenuSubItemComponent = (props) => {

    const [ focus, setFocus ] = useState(false); 
    const { link, title } = props;
    return <Link to={link} css={dashboardItemStyle} 
      onMouseOver={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)} >
        {title}
        {
          focus?
            <BiRadioCircleMarked />: <BiRadioCircle />
        }
      
        
    </Link>
}

export default SideMenuSubItemComponent;
