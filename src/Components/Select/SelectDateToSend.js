
 import React, { useState } from 'react';
 import { css, jsx } from '@emotion/react';
 import { Radio, Input, TimePicker } from 'antd';
 import DateDialog from '../Picker/DateDialog';
 import locale from "antd/es/date-picker/locale/fa_IR";



 const formFrame = (width) => css `
    width: ${width};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    @media(max-width: 768px){
        width: 100% !important;
    }
 `

const labelStyle = css `
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -1px
`
const radioGroup = css `
    height: 32px;
    display: flex;
    align-items: center;
    @media(max-width: 768px){
        margin-bottom: 10px;
    }
`
const radioFrame = css `
    display: flex;
    flex-direction: row-reverse;
    @media(max-width: 768px){
        flex-direction: column
    }
`
const radioStyle = css `
    font-size: 13px;
    width: max-content;
    & > span:nth-type-of(2){
        width: max-content
    }
`
const selectDateInput = css `
    width: 150px;
    margin: 0 5px;
`
const inputStyle = css `
    width: 150px;
`



 const SelectDateToSend = (props) => {

    const { width='200px' } = props;
    const [ dateDialog, setDateDialog ] = useState(false);
    const [radioValue, setRadioValue] = useState(1);
    const [ selectedDate, setSelectedDate ] = useState('');
    const [ selectedTime, setSelectedTime ] = useState('');

    const onChange = e => {
        setRadioValue(e.target.value);
    };
    const selectDialogDate = (date) => {
        console.log(date);
        setDateDialog(false);
    };

    const formatDate = (dateValue) =>  {
        if (!dateValue)
            return '';
        const inputFormat = 'jYYYY-jM-jD';
        var finalDate = dateValue.locale('fa').format(inputFormat);
        setSelectedDate(finalDate);
        setDateDialog(false);
    }
    const onChangeTime = () => {
        console.log("YES");
    }



    return(
        <div css={formFrame(width)}>
            {
                dateDialog? 
                <DateDialog onOk={(date) => selectDialogDate(date)} 
                    onChange={(date) => formatDate(date)}
                    onCancel={() => setDateDialog(false)} visible={dateDialog} />: null
            }
        
            <label css={labelStyle} htmlFor='dateToSend'>تاریخ ارسال</label>
            <div css={radioFrame}>
                <Radio.Group onChange={onChange} value={radioValue} css={radioGroup} id='#dateToSend'>
                    <Radio value={1} css={radioStyle}>اکنون</Radio>
                    <Radio value={2} css={radioStyle}>در تاریخ مشخص</Radio>
                </Radio.Group>
                {
                    radioValue === 2?
                        <div className="inRowFlexItems">
                            <TimePicker use12Hours onChange={onChangeTime} placeholder='انتحاب زمان'
                                 css={inputStyle}
                                 locale={{
                                    ...locale,
                                    lang: {
                                      ...locale.lang,
                                      now: "الان",
                                      ok: "انتخاب",
                                    }
                                  }} />
                            <Input placeholder='انتخاب تاریخ' css={selectDateInput}
                                onClick={() => setDateDialog(true)}
                                  value={selectedDate}
                            />
                            
                        </div>: null
                }
            </div>
        </div>
    )
 }

 export default SelectDateToSend;