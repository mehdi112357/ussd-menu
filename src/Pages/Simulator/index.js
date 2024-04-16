/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import * as dashboardStyle from "../../HOC/DashboardLayout_style";
import SectionTitle from "../../Containers/Title/SectionTitle";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import DialPad from "./Components/Dialpad";
import StaticTexts from "../../Constants/En/StaticTexts";
import SimpleInput from "../../Components/Input/SimpleInput";
import Space30 from "../../Components/Spaces/Space30";
import {openNotification} from "../../App";
import {useDispatch} from "react-redux";
import {setPhoneNumber} from "../../Redux/Reducer/simulatorSlice";
import Space10 from "../../Components/Spaces/Space10";
import Space20 from "../../Components/Spaces/Space20";

const boxContentStyle = css `
  display: flex;
  flex-direction: row;
  @media(max-width: 768px){
    flex-direction: column;
  }
`
const simulatorFrame = css`
  width: 70%;
  display: flex;
  justify-content: center;
  @media(max-width: 768px){
    width: 100%;
  }
`
const selectDataFrame = css`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  @media(max-width: 768px){
    width: 100%;
  }
`
const submitBtnFrame = css `
  width: 100%;
  display: flex;
  justify-content: center;
`



const Index = () => {

    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState();
    const [form, setForm] = useState({
        phone: '',
        command: '',
    });


    const dispatch = useDispatch();

    const callMenu = async () => {
        setLoading(true);
        setLoading(false);
        dispatch(setPhoneNumber(form));
        setForm({
            phone: '',
            command: ''
        })
        openNotification( StaticTexts.notification.addMobileNumberSuccess,
            StaticTexts.common.successIcon``)
    }

    const handleChangeInput = (name, value) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div css={dashboardStyle.dashContentFrame}>
            <SectionTitle title={StaticTexts.dashboardSimulatorSideMenu}/>
            <div css={boxContentStyle}>

                <div css={selectDataFrame}>
                    <SimpleInput
                        label='Enter mobile number'
                        floatLabel={true}
                        width='100%'
                        isNumber
                        value={form.phone}
                        onChange={(e) => handleChangeInput('phone', e.target.value)} />
                    <Space10 />
                    <SimpleInput
                        label='Select item'
                        floatLabel={true}
                        width='100%'
                        isNumber
                        value={form.command}
                        onChange={(e) => handleChangeInput('command', e.target.value)} />
                    <Space20 />
                    <div css={submitBtnFrame}>
                        <SubmitButton
                            title={StaticTexts.common.save}
                            width='100%'
                            loading={loading}
                            handleClick={callMenu}
                        />
                    </div>
                </div>

                <div css={simulatorFrame}>
                    <DialPad data={response} />
                </div>
            </div>
        </div>
    )
}

export default Index;