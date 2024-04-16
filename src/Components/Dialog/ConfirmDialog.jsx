/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React from 'react';
import {Button, Modal} from 'antd';
import {BeatLoader} from "react-spinners";


const deleteContentFrame = css`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  h4{
    font-size: 14px;
  }
`

const ConfirmDialog = ({ title, onApprove, message, onCancel, loading}) => {

    return (
        <Modal title={title}
               open={true}
               footer={null}
               cancelText='Cancel'
               onOk={onApprove}
               onCancel={onCancel}>
            <div css={deleteContentFrame}>
                <h4>{message}</h4>
            </div>
            <footer className='flex justify-end gap-2'>
                <Button
                    size='middle'
                    onClick={onCancel}>Cancel</Button>
                <Button
                    size='middle'
                    type='primary'
                    onClick={onApprove}
                    disabled={loading}
                    className='bg-green-500 flex hover:!bg-green-600 disabled:!bg-green-600'>
                    {
                        loading?
                            <BeatLoader size={6} color='#fff' className='pt-1' />:'Approve'
                    }
                </Button>
            </footer>
        </Modal>
    )
}

export default ConfirmDialog;