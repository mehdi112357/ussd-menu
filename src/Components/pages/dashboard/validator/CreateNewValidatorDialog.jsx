/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber, Modal, Select} from "antd";
import GeneralRequest from "../../../../Utils/API/GeneralRequest";
import services from "../../../../Constants/Services";
import {logicalOperation} from "../../../../Constants/Menu/MenuValues";
import {openNotification} from "../../../../App";
import StaticTexts from "../../../../Constants/En/StaticTexts";


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
const inRowFormStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  row-gap: 10px;
  column-gap: 10px;
  flex-wrap: wrap;
`


const CreateNewValidatorDialog = ({onApprove, onCancel, apiId, mode='create'}) => {

    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectedNextMenu, setSelectedNextMenu] = useState();
    const [search, setSearch] = useState({
        array: [],
        menuId: null,
        webService: null,
        selectedNextMenuTitle: null
    })

    const [validatorForm] = Form.useForm();

    useEffect(() => {
        getSearchItems('');
    }, []);

    const getSearchItems = (param) => {
        GeneralRequest.get(`${services.searchMenu}${param}`)
            .then((res) => {
                const convertedOptions = res.data.map((row) => {
                    return { value : row.menuId, label : row.fullPath }
                });
                setSearch({
                    ...search,
                    array: convertedOptions
                });
            })
            .catch(() => {})
    }

    const handleChangeSearchMenuId = (value) => {
        let title = search.array.filter(item => item.value === value);
        setForm({...form, returnToMenuId: value});
        setSearch({
            ...search,
            selectedNextMenuTitle: title[0].label
        })
        if (value.length > 2){
            getSearchItems(value);
        }
    };
    const onSearch = (value) => {
        setForm({
            ...form, returnToMenuId: value
        })
    };
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const handleSubmit = () => {
        setLoading(true);
        let formData = [
            {
                "logicalOperation": validatorForm.getFieldValue("logicalOperation"),
                "menuOperationId": apiId,
                "nextLogicalOperation": validatorForm.getFieldValue("nextOperation"),
                "order": validatorForm.getFieldValue("order") || '',
                "parameter": validatorForm.getFieldValue("parameter") || '',
                "value": validatorForm.getFieldValue("value") || '',
                "nextWebserviceURL": "",
                "menuOperationURL": ""
            }
        ]
        let url;
        if (mode === 'edit'){
            url = `${services.apiValidatorSave}/${apiId}`
        }
        else{
            url = `${services.apiValidatorSave}`
        }
        GeneralRequest.post(url , formData)
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
    }

    return(
        <Modal
            title="Create new validator"
            className='!w-[94%] md:!w-[50%]'
            open={true}
            onCancel={onCancel}
            footer={null}>
            <div className='flex flex-col justify-end pt-8'>
                <Form
                    form={validatorForm}
                    css={dataInputFrame}
                    onFinish={handleSubmit}
                    initialValues={{
                        active: true
                    }}
                >
                    <div css={inRowFormStyle}>
                        <Form.Item
                            name="order"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter order',
                                },
                            ]}
                        >
                            <InputNumber
                                min={1}
                                size='large'
                                placeholder='Order'
                                style={{minWidth: 190}} />
                        </Form.Item>
                        <Form.Item
                            name="parameter"
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
                            />
                        </Form.Item>
                        <Form.Item
                            name="value"
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
                            />
                        </Form.Item>
                        <Form.Item
                            name="logicalOperation"
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
                    </div>
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
            </div>
        </Modal>
    )
}

export default CreateNewValidatorDialog;
