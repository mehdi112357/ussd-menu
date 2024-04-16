
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';


const websiteTitle = (align) => css `
  width: 100%;
  font-size: 64px;
  color: ${colors.titleColorOnWhite};
  text-transform: capitalize;
  margin-bottom: 15px;
  font-weight: 100;
  line-height: 72px;
  text-align: ${align};
  @media (max-width: 768px) {
    font-size: 46px;
  }
`


const WebsiteSectionTitle = ({title, align = 'left'}) => {
    return <h2 css={websiteTitle(align)}>{title}</h2>
}

export default WebsiteSectionTitle;
