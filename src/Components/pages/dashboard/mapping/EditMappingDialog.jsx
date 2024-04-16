import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Modal} from "antd";
import GeneralRequest from "../../../../Utils/API/GeneralRequest";
import services from "../../../../Constants/Services";
import {openNotification} from "../../../../App";
import StaticTexts from "../../../../Constants/En/StaticTexts";

const CreateNewMappingDialog = ({onApprove, onCancel, item, apiId}) => {

    const [loading, setLoading] = useState(false);
    const [editMappingForm] = Form.useForm();

    useEffect(() => {
        editMappingForm.setFieldValue("source", item.source);
        editMappingForm.setFieldValue("destination", item.destination);
    }, []);

    const onFinish = (values) => {
        setLoading(true);
        let mappingForm = [{
            "destination": values.destination,
            "id": item.id,
            "menuOperationId": apiId,
            "source": values.source
        }];
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
            title="Edit Mapping"
            className='!w-[94%] md:!w-[50%]'
            open={true}
            onCancel={onCancel}
            footer={null}>
            <div className='flex flex-col justify-end pt-8'>
                <Form
                    form={editMappingForm}
                    onFinish={onFinish}
                    className='flex flex-col'
                    autoComplete="off">
                    <span className='flex flex-row gap-4'>
                        <Form.Item
                            name='source'
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
                            name="destination"
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
                    </span>
                    <Form.Item className='w-full flex justify-end'>
                        <Button
                            size='middle'
                            htmlType="submit"
                            type="primary"
                            loading={loading}
                            className='bg-green-500 text-white text-[15px] py-0
                                    rounded-[5px] hover:!bg-green-600
                                    hover:text-white'>Edit
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </Modal>
    )
}

export default CreateNewMappingDialog;
