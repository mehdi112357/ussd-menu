
import { css, jsx } from '@emotion/react';
import {Link} from "react-router-dom";
import * as colors from '../../Constants/Colors/Colors';

const buttonStyle = (color) => css `
  color: #fff;
  font-size: 15px;
  border-radius: 100px;
  padding: 17px 25px;
  text-decoration: none;
  transition-duration: 0.3s;
  background-color: ${color === 'blue'? colors.singleBlueButton: color === 'orange'? 
          colors.orangeMaterial: color === 'red'? colors.redMaterial: color === 'green'?
            colors.greenMaterial: colors.grayMaterial};
  &:hover{
    background-color: #000;
  }
`

const SimpleLinkButton = ({href, color, title}) => {
    return(
        <Link to={href} css={buttonStyle(color)}>
            {title}
        </Link>
    )
}

export default SimpleLinkButton;
