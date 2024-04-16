/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useState} from 'react';
import {Modal} from 'antd';
import {BeatLoader} from "react-spinners";


const deleteContentFrame = css`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  h4{
    font-size: 14px;
  }
`

const DeleteShortCodeDialog = (props) => {

    const {onOpen, onCancel, onOk, loading} = props;
    const {title} = props.item;

    return (
        <Modal title={`کد دستوری ${title}`} open={onOpen}
               okText={loading? <BeatLoader color='#fff' size={5} />: 'حذف'}
               cancelText='انصراف'
               onOk={onOk}
               onCancel={onCancel}>
            <div css={deleteContentFrame}>
                <h4>برای حذف کد دستوری مطمئن هستید؟</h4>
            </div>
        </Modal>
    )
}

export default DeleteShortCodeDialog;