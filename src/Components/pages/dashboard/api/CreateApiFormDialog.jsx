/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Form, Input, InputNumber, Modal, Select} from "antd";
import GeneralRequest from "../../../../Utils/API/GeneralRequest";
import services from "../../../../Constants/Services";
import {openNotification} from "../../../../App";
import StaticTexts from "../../../../Constants/En/StaticTexts";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import DashboardSectionTitle from "../../../Title/DashboardSectionTitle";
import {httpMethods, nextMenuAPI} from "../../../../Constants/Menu/MenuValues";

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
const checkBoxFrame = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
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


const CreateApiFormDialog = ({onApprove, menuID, onCancel, mode, apiId}) => {
    const { TextArea } = Input;
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [menuList, setMenuList] = useState([]);
    const [selectedNextMenu, setSelectedNextMenu] = useState();
    const [defaultData, setDefaultData] = useState([]);

    const [search, setSearch] = useState({
        array: [],
        menuId: null,
        webService: null
    })

    const [apiForm] = Form.useForm();

    useEffect(() => {
        getSearchItems('');
        getShortCodeList();
        if (mode === 'edit'){
            getDefaultValues(apiId)
        }
    }, []);

    const getDefaultValues = async (id) => {
        await GeneralRequest.get(`${services.loadSingleApi}/${id}`)
            .then((res) => {
                let result = res.data;
                setDefaultData(result);
                setDefaultValues(result);
            })
            .catch(() => {
                setLoading(false);
                openNotification(StaticTexts.notification.errorLoadingData,
                    StaticTexts.common.failIcon)
            })
    }

    const setDefaultValues = (result) => {
        apiForm.setFieldValue("executionOrder", result.executionOrder);
        apiForm.setFieldValue("header", result.header);
        apiForm.setFieldValue("httpMethod", result.httpMethod);
        apiForm.setFieldValue("url", result.url);
        apiForm.setFieldValue("queryString", result.queryString);
        apiForm.setFieldValue("body", result.body);
        apiForm.setFieldValue("nextMenu", result.nextMenu);
        apiForm.setFieldValue("nextMenuId", result.nextMenuId);
        apiForm.setFieldValue("hasValidation", result.hasValidation);
        apiForm.setFieldValue("active", result.active);
        apiForm.setFieldValue("type", result.type === 'SHOW_DATA');
    }

    const handleChangeSearchMenuId = (value) => {
        setForm({...form, returnToMenuId: value});
        apiForm.setFieldValue("menuId", value);
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

    const getShortCodeList = async () => {
        await GeneralRequest.get(services.menuList)
            .then((res) => {
                let convertedArray = res.data.map(item => {
                    return {value : item.id, label : item.text}
                })
                setMenuList(convertedArray);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                openNotification(StaticTexts.notification.errorLoadingData,
                    StaticTexts.common.failIcon)
            })
    }
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
    const handleSubmit = () => {
        setLoading(true);
        let formData = {
            "active": apiForm.getFieldValue("active") === 'on' || false,
            "body": apiForm.getFieldValue("body"),
            "executionOrder": apiForm.getFieldValue("executionOrder"),
            "hasValidation": apiForm.getFieldValue("hasValidation") === 'on' || false,
            "header": apiForm.getFieldValue("header"),
            "httpMethod": apiForm.getFieldValue("httpMethod"),
            "menuId": menuID,
            "nextMenuId": selectedNextMenu === 'menuId'?
                apiForm.getFieldValue("menuId"): null,
            "nextWebserviceId": selectedNextMenu === 'webService'?
                apiForm.getFieldValue("webService"): null,
            "queryString": apiForm.getFieldValue("queryString").toString(),
            "type": apiForm.getFieldsValue("type")? "SHOW_DATA": null,
            "url": apiForm.getFieldValue("url")
        }
        let url;
        if (mode === 'edit'){
            url = `${services.saveMenuApi}/${apiId}`
        }
        else{
            url = `${services.saveMenuApi}`
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
            title="Create New API"
            className='!w-[94%] md:!w-[50%]'
            open={true}
            onCancel={onCancel}
            footer={null}>
            <div className='flex flex-col justify-end pt-10'>
                <>
                    <Form
                        form={apiForm}
                        css={dataInputFrame}
                        onFinish={handleSubmit}
                        initialValues={{
                            active: true
                        }}
                    >
                        <div css={inRowFormStyle}>
                            <Form.Item
                                name="executionOrder"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter execution order',
                                    },
                                ]}
                            >
                                <InputNumber
                                    min={1}
                                    size='large'
                                    placeholder='Execution Order'
                                    style={{minWidth: 190}} />
                            </Form.Item>
                            <Form.Item
                                name="header"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter header',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder='Header'
                                    size='large'
                                />
                            </Form.Item>
                            <Form.Item
                                name="httpMethod"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter http method',
                                    },
                                ]}>
                                <Select
                                    placeholder='Select http method'
                                    size='large'
                                    className='!w-[200px] !text-[12px] !placeholderStyle'
                                    options={httpMethods} />
                            </Form.Item>
                            <Form.Item
                                name="url"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter Url',
                                    },
                                ]}>
                                <Input
                                    addonBefore="http://"
                                    width={400}
                                    placeholder='Url'
                                    size='large'
                                />
                            </Form.Item>
                        </div>
                        <div className='w-full'>
                            <DashboardSectionTitle
                                title='Query string'
                                description='Add query string to API'
                            />
                            <Form.List name="queryString">
                                {(queryFields, { add, remove }) => (
                                    <div className='w-fit'>
                                        {queryFields.map(({ key, name, ...restField }) => (
                                            <div
                                                key={key}
                                                className='w-fit justify-start flex flex-row gap-2 mt-4'>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'key']}
                                                    className='mb-0'
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Missing first name',
                                                        },
                                                    ]}>
                                                    <Input
                                                        placeholder="Key"
                                                        size='large'
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    className='mb-0'
                                                    name={[name, 'value']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Missing last name',
                                                        },
                                                    ]}>
                                                    <Input placeholder="Value" size='large' />
                                                </Form.Item>
                                                <AiOutlineMinusCircle
                                                    className='text-xl text-red-600 relative top-2'
                                                    onClick={() => remove(name)} />
                                            </div>
                                        ))}
                                        <Form.Item
                                            className='mt-5'>
                                            <Button
                                                type="dashed"
                                                size='large'
                                                className='!w-full !h-12 !bg-white !text-gray-600'
                                                onClick={() => add()}
                                                block icon={<AiOutlinePlusCircle
                                                className='relative top-0.5 text-gray-600' />}>
                                                Add query string
                                            </Button>
                                        </Form.Item>
                                    </div>
                                )}
                            </Form.List>
                        </div>
                        <div className='w-full'>
                            <DashboardSectionTitle
                                title='Api Body'
                                description='Add query string to API'
                            />
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter body',
                                    },
                                ]}
                                className='mb-0'
                                name="body">
                                <TextArea
                                    className='textAreaStyle w-[500px] !min-h-[120px]'
                                    placeholder='Body ...'
                                />
                            </Form.Item>
                        </div>
                        <div className='w-full flex flex-col mb-0 gap-2'>
                            <DashboardSectionTitle
                                title='Select next item'
                                description='Based on fist field you can just select menu id or web service'
                            />
                            <div className='flex flex-row gap-3 justify-start'>
                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter next menu',
                                        },
                                    ]}
                                    name="nextMenu">
                                    <Select
                                        placeholder='Select next menu'
                                        size='large'
                                        className='!w-[200px] !text-[12px] !placeholderStyle'
                                        onChange={(e) => setSelectedNextMenu(e)}
                                        options={nextMenuAPI} />
                                </Form.Item>
                                {
                                    selectedNextMenu === 'menuId' && <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Enter next menu id',
                                            },
                                        ]}
                                        name='nextMenuId'>
                                        <Select
                                            showSearch
                                            size='large'
                                            allowClear={true}
                                            placeholder="Next menu"
                                            optionFilterProp="children"
                                            className='!w-[250px]'
                                            onChange={(e) => handleChangeSearchMenuId(e)}
                                            onSearch={onSearch}
                                            filterOption={filterOption}
                                            options={search.array}
                                        />
                                    </Form.Item>
                                }
                                {
                                    selectedNextMenu === 'webService' &&
                                    <h5>Web service is not available!</h5>
                                }
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-start'>
                            <Form.Item
                                name='hasValidation'
                                className='mb-0'>
                                <div css={checkBoxFrame}>
                                    <Checkbox onChange={(e) =>
                                        apiForm.setFieldValue("hasValidation", e.target.checked)}>
                                        Has validation
                                    </Checkbox>
                                </div>
                            </Form.Item>
                            <Form.Item
                                className='mb-0'
                                name='active'>
                                <div css={checkBoxFrame}>
                                    <Checkbox
                                        // defaultChecked={defaultData.active}
                                        onChange={(e) =>
                                        apiForm.setFieldValue("active", e.target.checked)}>
                                        Active API
                                    </Checkbox>
                                </div>
                            </Form.Item>
                            <Form.Item
                                name='type'
                                className='mb-0'>
                                <div css={checkBoxFrame}>
                                    <Checkbox onChange={(e) =>
                                        apiForm.setFieldValue("type", e.target.checked)}>
                                        Show Data
                                    </Checkbox>
                                </div>
                            </Form.Item>
                        </div>
                        <Form.Item className="p-2 mb-0 ml-auto">
                            <Button
                                htmlType="submit"
                                type="primary"
                                loading={loading}
                                className='bg-green-500 text-white text-[15px] py-0 px-10
                                    h-[46px] rounded-[5px] hover:!bg-green-600
                                    hover:text-white'>Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </>
                {/*<div css={submitBtnFrame}>*/}
                {/*    <SubmitButton*/}
                {/*        handleClick={handleSubmit}*/}
                {/*        title='ثبت' />*/}
                {/*</div>*/}
            </div>
        </Modal>
    )
}

export default CreateApiFormDialog;
