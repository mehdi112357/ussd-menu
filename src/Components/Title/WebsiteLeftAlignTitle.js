
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';


const websiteTitle = (fontSize) => css `
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: ${fontSize}px;
  line-height: 1.25;
  font-weight: 400;
  color: ${colors.blackTitleColor};
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`


const WebsiteLeftAlignTitle = ({title, fontSize}) => {
    return <h3 css={websiteTitle(fontSize)}>{title}</h3>
}

export default WebsiteLeftAlignTitle;
