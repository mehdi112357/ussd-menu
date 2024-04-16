/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber, Modal, Select} from "antd";
import GeneralRequest from "../../../../Utils/API/GeneralRequest";
import services from "../../../../Constants/Services";
import {openNotification} from "../../../../App";
import StaticTexts from "../../../../Constants/En/StaticTexts";
import {logicalOperation} from "../../../../Constants/Menu/MenuValues";


const dataInputFrame = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 5px 0;
  row-gap: 10px;
  column-gap: 15px;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const CreateNewMappingDialog = ({onApprove, onCancel, item, apiId}) => {

    const [loading, setLoading] = useState(false);
    const [editValidatorForm] = Form.useForm();

    useEffect(() => {
        editValidatorForm.setFieldValue("order", item.order);
        editValidatorForm.setFieldValue("parameter", item.parameter);
        editValidatorForm.setFieldValue("value", item.value);
        editValidatorForm.setFieldValue("logicalOperation", item.logicalOperation);
        editValidatorForm.setFieldValue("nextOperation", item.nextLogicalOperation);
    }, []);

    const onFinish = (values) => {
        setLoading(true);
        let validatorForm = [{
            "order": values.order,
            "parameter": values.parameter,
            "value": values.value,
            "logicalOperation": values.logicalOperation,
            "nextOperation": values.nextOperation,
            "id": item.id,
            "menuOperationId": apiId,
        }];
        GeneralRequest.post(services.apiValidatorSave , validatorForm)
            .then((res) => {
                if (res.status === 200){
                    onApprove();
                }
            })
            .catch(() => {
                openNotification('',
                    StaticTexts.common.failIcon)
            })
            .finally(() => setLoading(false))
    };

    return(
        <Modal
            title="Edit Validator"
            className='!w-[94%] md:!w-[50%]'
            open={true}
            onCancel={onCancel}
            footer={null}>
            <span className='flex flex-col justify-end pt-8'>
                <Form
                    form={editValidatorForm}
                    onFinish={onFinish}
                    css={dataInputFrame}
                >
                    <span className='flex flex-row gap-4 flex-wrap'>
                        <Form.Item
                            name="order"
                            className='mb-1'
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter order',
                                },
                            ]}>
                            <InputNumber
                                min={1}
                                size='large'
                                placeholder='Order'
                                style={{minWidth: 190}} />
                        </Form.Item>
                        <Form.Item
                            name="parameter"
                            className='mb-1'
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter parameter',
                                },
                            ]}
                        >
                            <Input
                                placeholder='Parameter'
                                size='large'
                                style={{minWidth: 190}}
                            />
                        </Form.Item>
                        <Form.Item
                            name="value"
                            className='mb-1'
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter value',
                                },
                            ]}
                        >
                            <Input
                                placeholder='Value'
                                size='large'
                                style={{minWidth: 190}}
                            />
                        </Form.Item>
                        <Form.Item
                            name="logicalOperation"
                            className='mb-1'
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter logical operation',
                                },
                            ]}>
                            <Select
                                placeholder='Select logical operation'
                                size='large'
                                allowClear={true}
                                className='!w-[200px] !text-[12px] !placeholderStyle'
                                options={logicalOperation} />
                        </Form.Item>
                        <Form.Item
                            name="nextOperation"
                            className='mb-1'
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter next operation',
                                },
                            ]}>
                            <Select
                                placeholder='Select next operation'
                                size='large'
                                allowClear={true}
                                className='!w-[200px] !text-[12px] !placeholderStyle'
                                options={logicalOperation} />
                        </Form.Item>
                    </span>
                    <Form.Item className="p-2 mb-0 ml-auto">
                        <Button
                            htmlType="submit"
                            type="primary"
                            loading={loading}
                            className='bg-green-500 text-white text-[15px] py-0 px-10
                                    h-[42px] rounded-[5px] hover:!bg-green-600 font-normal
                                    hover:text-white'>Submit
                        </Button>
                    </Form.Item>
                </Form>
            </span>
        </Modal>
    )
}

export default CreateNewMappingDialog;
