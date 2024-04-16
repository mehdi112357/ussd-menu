
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import {Link} from "react-router-dom";


const linkStyle = css`
  margin-bottom: 15px;
  a{
    color: ${colors.blackTitleColor};
    font-size: 16px;
    font-weight: 900;
    text-decoration: none;
  }
`


const FooterMainLink = ({title,href}) => {

    return(
        <li css={linkStyle}>
            <Link to={href}>
                {title}
            </Link>
        </li>
    )
}

export default FooterMainLink;
