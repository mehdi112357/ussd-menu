/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Modal, Space} from "antd";
import GeneralRequest from "../../../../Utils/API/GeneralRequest";
import services from "../../../../Constants/Services";
import {openNotification} from "../../../../App";
import StaticTexts from "../../../../Constants/En/StaticTexts";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

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


const CreateNewMappingDialog = ({onApprove, onCancel, apiId}) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {

    }, []);

    const onFinish = (values) => {
        setLoading(true);
        let mappingForm = [];
        values.mapping.map(item => mappingForm.push({
            "destination": item.destination,
            "menuOperationId": apiId,
            "source": item.source
        }));
        GeneralRequest.post(services.apiResponseMappingSave , mappingForm)
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
            title="Create New Mapping"
            className='!w-[94%] md:!w-[50%]'
            open={true}
            onCancel={onCancel}
            footer={null}>
            <div className='flex flex-col justify-end pt-8'>
                <Form
                    onFinish={onFinish}
                    autoComplete="off">
                    <Form.List name="mapping">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space
                                        key={key}
                                        className='mb-0'
                                        align="baseline"
                                    >
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'source']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Enter source',
                                                },
                                            ]}>
                                            <Input
                                                placeholder='Source'
                                                size='large'
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'destination']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Enter destination',
                                                },
                                            ]}>
                                            <Input
                                                placeholder='Destination'
                                                size='large'
                                            />
                                        </Form.Item>
                                        <AiOutlineMinusCircle
                                            className='text-xl text-red-600 relative top-1'
                                            onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => add()}
                                        block
                                        className='h-14'
                                        icon={<AiOutlinePlusCircle />}>
                                        Add field
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                    <Form.Item
                        className='flex w-full flex-row justify-end'
                    >
                        <Button
                            size='middle'
                            htmlType="submit"
                            type="primary"
                            loading={loading}
                            className='bg-green-500 text-white text-[15px] py-0 px-10
                                    h-[42px] rounded-[5px] hover:!bg-green-600 font-normal
                                    hover:text-white'>Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}

export default CreateNewMappingDialog;
