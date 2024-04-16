
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';

const dashboardLgPageMainTitle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //direction: rtl;
  
  h2{
    color: ${colors.titleColorOnWhite};
    font-size: 22px;
  }
  h4{
    color: lighten(${colors.titleColorOnWhite}, 17);
    font-size: 12px;
    margin-top: 3px;
  }`
const dashboardMdPageMainTitle = css `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2{
    color: ${colors.titleColorOnWhite};
    font-size: 18px;
  }
  h4{
    color: lighten(${colors.titleColorOnWhite}, 5);
    font-size: 11px;
    margin-top: 5px;
  }`

const DashboardPageMainTitle = ({ title, description, type }) => {
    return(
        <div css={type === 'lg'? dashboardLgPageMainTitle:
                type === 'md'? dashboardMdPageMainTitle: null}>
            <h2>{title}</h2>
            <h4>{description}</h4>
        </div>
    )
}

export default DashboardPageMainTitle;