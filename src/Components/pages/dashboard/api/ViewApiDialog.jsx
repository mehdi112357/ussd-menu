/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import {Button, Descriptions, Modal, Spin} from 'antd';
import GeneralRequest from "../../../../Utils/API/GeneralRequest";
import services from "../../../../Constants/Services";
import {openNotification} from "../../../../App";
import StaticTexts from "../../../../Constants/En/StaticTexts";
import SimpleDescription from "../../../Description/SimpleDescription";


const deleteContentFrame = css`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  h4{
    font-size: 14px;
  }
`

const ViewApiDialog = ({ title, onApprove, onCancel, apiId}) => {

    const [ detail, setDetail] = useState(null);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        getDetails();
    }, []);

    const getDetails = async () => {
        await GeneralRequest.get(`${services.loadSingleApi}/${apiId}`)
            .then((res) => {
                let result = res.data;
                setDetail(result)
            })
            .catch(() => {
                openNotification(StaticTexts.notification.errorLoadingData,
                    StaticTexts.common.failIcon)
            })
            .finally(() => setLoading(false))
    }


    return (
        <Modal title={title}
               open={true}
               footer={null}
               // className='rtlDirection'
               cancelText='Cancel'
               onOk={onApprove}
               onCancel={onCancel}>
            <div className='flex flex-col py-5 !ltr-grid'>
                {
                    loading?
                        <Spin size={9} />:
                        <ul className='flex flex-col items-start'>
                            <SimpleDescription field='ID' value={detail.id} />
                            <SimpleDescription field='Execution Order' value={detail.executionOrder} />
                            <SimpleDescription field='Header' value={detail.header} />
                            <SimpleDescription field='Http method' value={detail.httpMethod} />
                            <SimpleDescription field='Next menu text' value={detail.nextMenuText} />
                            <SimpleDescription field='Next menu title' value={detail.nextMenuTitle} />
                            <SimpleDescription field='Url' value={detail.url} />
                            <SimpleDescription field='Active' value={detail.active? 'Yes': 'No'} />
                            <SimpleDescription field='Has validation' value={detail.hasValidation? 'Yes': 'No'} />
                            <SimpleDescription field='Type' value={detail.type} />
                        </ul>
                }
            </div>
        </Modal>
    )
}

export default ViewApiDialog;