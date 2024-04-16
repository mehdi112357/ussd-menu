/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { Modal } from 'antd';
import {Calendar} from 'react-datepicker2';
 
 
 
 const calendarStyle = css `
    box-shadow: none;
    margin: 0;
 `
 const modalContent = css `
    display: flex;
    justify-content: center;
 `
 const rrr = css `
    background-color: red
 `

 
 
 const DateDialog = (props) => {

  
  const {visible, onOk, onCancel, onChange} = props;


     return (
        <Modal title="انتخاب تاریخ" visible={visible} onOk={onOk} onCancel={onCancel}
          okText="انتخاب" cancelText="بستن" css={modalContent} footer={null} headStyle={rrr}>
            <Calendar
                css={calendarStyle}
                isGregorian={false}
                onChange={(e) => onChange(e)}
            />
        </Modal>
     )
 }
 
 export default DateDialog;
 