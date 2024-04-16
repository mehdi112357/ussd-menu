/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React, {useState} from 'react';
import sendMessage from "../../Assets/images/sendMessage.png";
import Space20 from "../../Components/Spaces/Space20";
import SimpleInput from "../../Components/Input/SimpleInput";
import Space10 from "../../Components/Spaces/Space10";
import PasswordInput from "../../Components/Input/PasswordInput";
import * as colors from '../../Constants/Colors/Colors';
import {Button, Spin} from "antd";
import {useNavigate} from 'react-router';

const authMainFrame = css `
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`
const authFormBox = css `
  width: 600px;
  height: 500px;
  background-color: #f4f4f4;
  border-radius: 55px;
  box-shadow: inset 0 0 35px #ebebeb;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 768px){
    width: 92%;
  }
`
const companyLogo = css `
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 220px;
  }
`
const loginButton = css `
  width: 300px;
  height: 50px !important;
  background-color: ${colors.orangeMaterial};
  color: ${colors.primaryBlack};
  &:hover{
    color: ${colors.primaryBlack} !important;
    border: 1px solid ${colors.orangeMaterial} !important;
  }
`


const Index = () => {

    const [ loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/home');
        }, 2000);
    }

    return (
        <div css={authMainFrame}>
            <div css={authFormBox}>
                <div css={companyLogo}>
                    <img src={sendMessage} loading='lazy' alt='پنل USSD'/>
                </div>
                <Space20 />
                <SimpleInput
                    label='نام کاربری'
                    width={300}
                />
                <Space10 />
                <PasswordInput
                    label='کلمه عبور'
                    width={300}
                />
                <Space20 />
                <Button
                    size="large"
                    onClick={handleLogin}
                    css={loginButton}>
                    {
                       loading?
                            <Spin style={{ fontSize:12 }}/>:
                            'ورود'
                    }
                </Button>
            </div>
        </div>
    )
}

export default Index;