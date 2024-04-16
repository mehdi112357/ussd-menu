/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';

const pickerInputStyle = css`
  position: relative;
  width: 46%;
  margin-bottom: 45px;
  @media (max-width: 768px) {
    width: 100%
  }`
const requiredSign = (error) =>  css `
  margin-left: 3px;
  font-size: 15px;
  color: ${error ? colors.redMaterial: colors.inputTextColor};
  position: relative;
  top: 2px;`
const inputStyle = (error) => css`
    width: 100%;
    outline: none;
    font-size: 17px;
    font-weight: 900;
    padding: 5px 7px;
    height: 34px;
    color: ${colors.inputTextColor};
    border: 1px solid ${error? colors.redMaterial: colors.inputBorderBottom};
    border-radius: 2px;
    transition-duration: 0.2s;
    &:hover{
      border: 1px solid ${colors.hoverInputBorderBottom} !important;
    }
    &:focus{
      border: 1px solid ${colors.focusedInputBorderBottom} !important;;
    }
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: ${colors.inputPlaceholder};
      font-size: 18px;
      font-weight: 100;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      color: ${colors.inputPlaceholder};
      font-size: 18px;
      font-weight: 100;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: ${colors.inputPlaceholder};
      font-size: 18px;
      font-weight: 100;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: ${colors.inputPlaceholder};
      font-size: 18px;
      font-weight: 100;
`

const inputLabelStyle = (error) => css `
  position: absolute;
  color: ${error ? colors.redMaterial: colors.inputTextColor};
  font-size: 12px;
  top: -18px;
  font-weight: 900;`
const errorText = css `
  position: absolute;
  color: ${colors.redMaterial};
  font-size: 11px;
  font-weight: 900;
  top: 48px;`
const pickerStyle = css`
  width: 100%;
  height: 100%;
  .MuiInput-formControl{
    height: 100%;
    padding: 0;
    font-size: 16px;
    color: ${colors.inputTextColor}
  }
  .MuiInput-underline:before{
    border-bottom: transparent !important;
  }
`

const DatePickerComponent = ({ label, type= 'text', changeDatepicker,
                                    required, autoFocus, onChange, error}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const changeDate = (e) => {
      // console.log(e);
      changeDatepicker(e);
      setSelectedDate(e);

    }

    return(
        <div css={pickerInputStyle}>
            <label css={inputLabelStyle(error)} htmlFor={`${label}ID`}>{label}
                {
                    required?
                        <span css={requiredSign(error)}>*</span>: null
                } :</label>
            <div css={inputStyle(error)}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        autoOk
                        format="yyyy/MM/dd"
                        css={pickerStyle}
                        value={selectedDate} onChange={(e) => changeDate(e)} />
                </MuiPickersUtilsProvider>
            </div>
            {
                error !== ''? <span css={errorText}>{error}</span>: null
            }
        </div>
    )
}

export default DatePickerComponent;

