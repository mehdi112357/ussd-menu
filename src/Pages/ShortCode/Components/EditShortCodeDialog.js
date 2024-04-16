/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useState} from 'react';
import {Modal} from 'antd';
import SimpleInput from "../../../Components/Input/SimpleInput";
import Space30 from "../../../Components/Spaces/Space30";


const editContentFrame = css`
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
`

const EditShortCodeDialog = (props) => {

    const {onOpen, onCancel} = props;
    const {title, operator, shortCode, id} = props.item;

    return (
        <Modal title={`ویرایش کد دستوری ${title}`} open={onOpen}
               okText='ویرایش'
               cancelText='انصراف'
               onOk={onCancel}
               onCancel={onCancel}>
            <div css={editContentFrame}>
                <SimpleInput label={title}
                             floatLabel={true}
                             onChange={() => {}} />
                <Space30 />
                <SimpleInput label={operator}
                             floatLabel={true}
                             onChange={() => {}} />
                <Space30 />
                <SimpleInput label={shortCode}
                             floatLabel={true}
                             onChange={() => {}} />
            </div>
        </Modal>
    )
}

export default EditShortCodeDialog;