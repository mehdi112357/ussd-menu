/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import mobileFrame from "../../../Assets/images/mobileFrame.png";
import * as colors from '../../../Constants/Colors/Colors';
import {DialPadList} from "../../../Constants/Menu/MenuValues";
import EachDialButton from "./EachDialButton";
import {FaPhoneAlt} from "react-icons/fa";
import {Button} from "antd";
import ResponseResultFrame from "./ResponseResultFrame";
import {useSelector} from "react-redux";
import {setPhoneNumber} from "../../../Redux/Reducer/simulatorSlice";
import GeneralRequest from "../../../Utils/API/GeneralRequest";
import services from "../../../Constants/Services";
import {openNotification} from "../../../App";
import StaticTexts from "../../../Constants/En/StaticTexts";

const simulatorStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 640px;
  top: -80px;
  background-image: url(${mobileFrame});
  background-size: cover;
  @media (max-width: 768px) {
    top: 0;
  }`
const dialFakeFrame = css`
  width: 282px;
  height: 160px;
  //background-color: green;
`
const simulatorInnerFrame = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 285px;
  height: 615px;
  border-radius: 35px;
  background-color: #fff;
`
const dialpadFrame = css`
  width: 282px;
  position: relative;
  padding: 15px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

`
const inputNumberFrame = css`
  width: 100%;
  position: relative;
  input {
    width: 100%;
    border: none;
    outline: none;
    height: 52px;
    font-size: 24px;
    text-align: center;
    padding: 0 10px 15px;
    font-family: 'Calibri' !important;
    box-sizing: border-box;
    color: ${colors.darkSilver};
    border-bottom: 1px solid silver;
  }
`
const callIconButton = css `
  width: 50px !important;
  height: 50px;
  background-color: #38a169;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: #38a169 !important;
    opacity: 0.9;
  }
  svg{
    color: #fff;
    font-size: 20px;
  }
`


const DialPad = () => {

    const [inputValue, setInputValue] = useState(null);
    const [ responseFrame, setResponseFrame ] = useState(false);
    const [responseLoading, setResponseLoading] = useState(true);
    const [list, setList] = useState(null);

    const selectedPhone = useSelector(state => state.simulator.selectedPhone);

    const callMenuApi = async (action) => {
        setResponseFrame(true);
        setList(null);
        setResponseLoading(true);
        await GeneralRequest.get(`${services.simulator}?action=${action}&phone=${selectedPhone.phone}&content=${inputValue}`)
            .then((res) => {
                if (res.data){
                    const decodedString = decodeURIComponent(res.data);
                    setList(decodedString.replace(/\+/g, ' '));
                    setResponseLoading(false);
                }
                else{
                    setResponseLoading(false);
                }
            })
            .catch(() => {
                setResponseLoading(false);
                openNotification(StaticTexts.notification.errorLoadingData,
                    StaticTexts.common.failIcon)
            })
    }

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
        // const decimalPattern = /^[0-9.]*$/;
        // if (decimalPattern.test(e.target.value)){
        //     setInputValue(e.target.value);
        // }
    }
    const handleChangeInputWithButton = (value) => {
        setInputValue(inputValue !== null? inputValue + value: value);
    }

    return (
        <div css={simulatorStyle}>
            <div css={simulatorInnerFrame}>
                {
                    responseFrame &&
                        <ResponseResultFrame
                            loading={responseLoading}
                            data={list}
                            reCallMenu={(value) => callMenuApi(value)}
                            closeMenu={() =>
                            setResponseFrame(false)} />
                }
                <div css={dialFakeFrame}/>
                <div css={inputNumberFrame}>
                    <input
                        type='text'
                        onChange={handleChangeInput}
                        value={inputValue}
                        autoFocus={true}/>
                </div>
                <div css={dialpadFrame}>
                    {
                        DialPadList.map(item =>
                            <EachDialButton
                                key={item.id}
                                title={item.title}
                                subTitle={item.subTitle}
                                onClickItem={() => handleChangeInputWithButton(item.title)}/>
                        )
                    }
                </div>
                <Button type="primary"
                        shape="round"
                        css={callIconButton}
                        icon={<FaPhoneAlt />}
                        onClick={() => callMenuApi(1)}
                />
            </div>
        </div>
    )
}

export default DialPad;