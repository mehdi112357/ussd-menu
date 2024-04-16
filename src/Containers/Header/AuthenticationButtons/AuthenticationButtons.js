
import { css, jsx } from '@emotion/react';
import {Link} from "react-router-dom";
import StaticTexts from "../../../Constants/En/StaticTexts";
import * as colors from '../../../Constants/Colors/Colors';



const authenticationButtonsReg = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media(max-width: 768px){
    margin-bottom: 20px;
  }
`
const signUpButton = (type) => css`
  background-color: ${type === 'signUp'? '#000': '#fff'};
  color: ${type === 'signUp'? '#fff': '#000'};
  border-radius: 100px;
  margin: 0 5px;
  text-decoration: none;
  padding: 5px 12px;
  font-size: 14px;
  font-weight: 100;
  transition-duration: 0.2s;
  @media(max-width: 768px){
    width: 45%;
    text-align: center;
  }
  &:hover{
    background-color: ${type === 'signIn'? colors.state200: '#000'};
  }
`




const AuthenticationButtons = () => {
    return(
        <div css={authenticationButtonsReg}>
            <Link to='/signIn' css={signUpButton('signIn')}>
                {StaticTexts.logInTitle}
            </Link>
            <Link to='/signUp' css={signUpButton('signUp')}>
                {StaticTexts.signUpTitle}
            </Link>
        </div>
    )
}

export default AuthenticationButtons;
