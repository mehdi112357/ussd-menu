
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import StaticTexts from "../../Constants/En/StaticTexts";
import AuthenticationButtons from "./AuthenticationButtons/AuthenticationButtons";
import WebsiteMenu from "../Menu/WebsiteMenu/WebsiteMenu";
import Logo from '../../Assets/images/mainLogo.png';


const websiteHeaderStyle = css `
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  min-height: 70px;
  align-items: center;
  margin-bottom: 30px;
  h1{
    font-size: 26px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${colors.titleColorOnWhite};
  }
`

const rightSide = css `
  display: flex;
  width: 40%;
  justify-content: flex-end;
`
const leftSide = css `
  display: flex;
  width: 40%;
`


const WebsiteHeader = () => {
    return (
        <div css={websiteHeaderStyle}>
            <div css={rightSide}>
                <AuthenticationButtons />
            </div>
            <img src={Logo} alt={StaticTexts.projectName}/>
            <div css={leftSide}>
                <WebsiteMenu />
            </div>
        </div>
    )
}

export default WebsiteHeader;
