/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useState} from 'react';
import {Modal} from 'antd';
import ApiListTable from "./ApisListTable";


const editContentFrame = css`
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
`

const APIsDialog = ({title, onApprove, onReject}) => {

    const[step, setStep] = useState(1);

    return (
        <Modal title={title} open={true}
               className='!w-11/12'
               footer={null}
               onOk={onApprove}
               onCancel={onReject}>
            <div css={editContentFrame}>
                <ApiListTable />
            </div>
        </Modal>
    )
}

export default APIsDialog;