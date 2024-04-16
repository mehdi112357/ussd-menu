
import { css, jsx } from '@emotion/react';
import Logo from '../../Assets/images/mainLogo.png';
import * as colors from '../../Constants/Colors/Colors';
import StaticTexts from "../../Constants/En/StaticTexts";
import Space20 from "../../Components/Spaces/Space20";
import FooterMainLink from "../../Components/Link/FooterMainLink";


const websiteFooterStyle = css `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 70px;
  margin-top: 50px;
  align-items: flex-start;
  padding-bottom: 50px;
  @media(max-width: 768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const signatureReg = css`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img{
    margin-bottom: 10px;
  }
  @media(max-width: 768px){
    width: 100%;
    justify-content: center;
    margin-bottom: 50px;
  }
  p{
    font-size: 14px;
    color: ${colors.darkSilver};
  }
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

const middleReg = css`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 768px){
    width: 100%;
    flex-direction: column;
    margin: 30px 0;
  }
`
const middleForms = css `
  list-style: none;
  li{
    margin-bottom: 15px;
    text-transform: capitalize;
    font-size: 14px;
  }
  li:first-child{
    font-weight: 900;
    color: ${colors.darkSilver};
    font-size: 15px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px){
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    li{
      width: 100%;
      justify-content: center;
    }
  }
`



const WebsiteFooter = () => {
    return (
        <div css={websiteFooterStyle}>

        </div>
    )
}

export default WebsiteFooter;
