/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import SimpleSelect from "../../Components/Select/SimpleSelect";
import {ShortCodeActions, subShortCodeActions} from "../../Constants/Menu/MenuValues";
import {InputNumber, Select} from "antd";
import SearchSelect from "../../Components/Select/SearchSelect";
import SimpleInput from "../../Components/Input/SimpleInput";
import SimpleCheckbox from "../../Components/Checkbox/SimpleCheckbox";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import {useLocation} from "react-router-dom";
import GeneralRequest from "../../Utils/API/GeneralRequest";
import services from "../../Constants/Services";
import {openNotification} from "../../App";
import StaticTexts from "../../Constants/En/StaticTexts";
import Space20 from "../../Components/Spaces/Space20";

const dataInputFrame = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0;
  row-gap: 10px;
  column-gap: 15px;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const submitBtnFrame = css`
  display: flex
`
const inputNumberStyle = css`
  min-width: 190px;
`
const formFrame = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`


const CreateNewMenu = ({handleCreation, moveToNext}) => {

    const [loading, setLoading] = useState(false);
    const [menuList, setMenuList] = useState([]);
    const [form, setForm] = useState({
        action: '',
        status: '',
        code: '',
        command: '',
        hirachical: '',
        order: '',
        text: '',
        title: '',
        showMenu: false,
        isActive: false,
        parentId: null,
        value: null,
        searchMenu: '',
        variableName: null,
        returnToMenuId: ''
    });
    const [search, setSearch] = useState({
        array: [],
        selected: null
    })
    const [menuId, setMenuId] = useState(null);

    const { state } = useLocation();

    useEffect(() => {
        getSearchItems('');
        if (state?.parentId){
            setForm({
                ...form,
                parentId: state.parentId
            })
        }
        else{
            getShortCodeList();
        }
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
        setForm({...form, returnToMenuId: value});
        setSearch({
            ...search,
            selected: value
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

    const handleChange = (value, name) => {
        setForm({
            ...form,
            [name]: value
        })
    }
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
    const handleSubmit = () => {
        setLoading(true);
        let formData = {
            "action": form.action,
            "active": form.isActive,
            "command": form.command,
            "order": form.order,
            "text": form.text,
            "title": form.title,
            "showMenu": form.showMenu,
            "parentId": form.parentId,
            "value": form.value,
            "variableName": form.variableName,
            "returnToMenuId": null
        }

        GeneralRequest.post(services.createMenu, formData)
            .then((res) => {
                if (res.status === 200){
                    console.log(res.data)
                    setLoading(false);
                    setMenuId(res);
                    handleCreation(res.data);
                    openNotification( StaticTexts.notification.successMenuSubmit,
                        StaticTexts.common.successIcon);
                    // navigate('/shortcode')
                }
            })
            .catch(() => {
                setLoading(false);
                openNotification('',
                    StaticTexts.common.failIcon)
            })
    }

    return(
        <div css={formFrame}>
            <>
                <div css={dataInputFrame}>
                    <SimpleSelect
                        floatLabel={false}
                        inRow={true}
                        clearable={true}
                        label={StaticTexts.common.operation}
                        onChange={(e) => handleChange(e, 'action')}
                        options={state?.text? subShortCodeActions: ShortCodeActions}
                    />
                    <InputNumber
                        min={1}
                        size='large'
                        placeholder='Command'
                        style={{minWidth: 190}}
                        onChange={(e) =>
                            handleChange(e, 'command')} />
                    <SearchSelect
                        label='Parent'
                        disabledValue={state?.text}
                        data={menuList}
                        onSelect={(e) => handleChange(e, 'parentId')}
                    />
                    <InputNumber
                        min={1}
                        size='large'
                        placeholder='Order'
                        css={inputNumberStyle}
                        onChange={(e) =>
                            handleChange(e, 'order')} />
                    <SimpleInput
                        floatLabel={false}
                        inRow={true}
                        // dir='rtl'
                        onChange={(e) => handleChange(e.target.value, 'text')}
                        label='Text'
                    />
                    <SimpleInput
                        floatLabel={false}
                        inRow={true}
                        onChange={(e) => handleChange(e.target.value, 'title')}
                        label='Title'
                    />
                    <SimpleInput
                        floatLabel={true}
                        inRow={true}
                        onChange={(e) => handleChange(e.target.value, 'value')}
                        label='Value'
                    />
                    <SimpleInput
                        floatLabel={true}
                        inRow={true}
                        onChange={(e) => handleChange(e.target.value, 'variableName')}
                        label='Variable'
                    />
                    <Select
                        showSearch
                        size='large'
                        placeholder="Return to menu"
                        optionFilterProp="children"
                        style={{minWidth: 190}}
                        onChange={(e) => handleChangeSearchMenuId(e)}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={search.array}
                    />
                </div>
                <div css={dataInputFrame}>
                    <SimpleCheckbox
                        onChange={(e) => handleChange(e.target.checked, 'showMenu')}
                        title='Show menu' />
                </div>
                <div css={dataInputFrame}>
                    <SimpleCheckbox
                        onChange={(e) => handleChange(e.target.checked, 'isActive')}
                        title='Active menu' />
                </div>
                <Space20 />
            </>
            <div css={submitBtnFrame}>
                {/*{*/}
                {/*    !menuId*/}
                {/*        <SubmitButton*/}
                {/*            handleClick={handleSubmit}*/}
                {/*            // handleClick={() => handleCreation(1)}*/}
                {/*            title='Submit' />:*/}
                {/*        <SubmitButton*/}
                {/*            handleClick={moveToNext}*/}
                {/*            title='Add API' />*/}
                {/*}*/}
                {
                    !menuId &&
                    <SubmitButton
                    handleClick={handleSubmit}
                    // handleClick={() => handleCreation(1)}
                    title='Submit' />
                }
            </div>
        </div>
    )
}

export default CreateNewMenu;