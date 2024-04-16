/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React  from 'react';
import * as dashboardStyle from "../../HOC/DashboardLayout_style";
import SectionTitle from "../../Containers/Title/SectionTitle";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import PasswordInput from "../../Components/Input/PasswordInput";
import StaticTexts from "../../Constants/En/StaticTexts";

const dataInputFrame = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const dataInputInnerFrame = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const submitBtnFrame = css`
  display: flex
`


const Index = () => {
    return (
        <div css={dashboardStyle.dashContentFrame}>
            <SectionTitle title={StaticTexts.dashboardSettingSideMenu} />
            <div css={dataInputFrame}>
                <div css={dataInputInnerFrame}>
                    <PasswordInput
                        label='Current password'
                        width={250}
                    />
                    <PasswordInput
                        label='New password'
                        width={250}
                    />
                    <PasswordInput
                        label='Repeat new password'
                        width={250}
                    />
                    <div css={submitBtnFrame}>
                        <SubmitButton title='Submit' width='100%'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;