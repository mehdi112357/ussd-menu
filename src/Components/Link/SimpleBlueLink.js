
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import * as colors from '../../Constants/Colors/Colors';

const linkStyle = css `
  font-size: 14px;
  font-weight: 900;
  color: ${colors.primaryLight};
  text-decoration: none !important;
`


const SimpleBlueLink = ({ href, title }) => {

    return(
        <Link to={href} css={linkStyle}>
            {title}
        </Link>
    )
}

export default SimpleBlueLink;
