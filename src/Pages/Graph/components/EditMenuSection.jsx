/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import {TbFocus2} from "react-icons/tb";
import StaticTexts from "../../../Constants/En/StaticTexts";
import * as colors from "../../../Constants/Colors/Colors";
import InputWithLabel from "../../../Components/Input/InputWithLabel";
import Space10 from "../../../Components/Spaces/Space10";
import SubmitButton from "../../../Components/Buttons/SubmitButton";
import Space30 from "../../../Components/Spaces/Space30";
import Space20 from "../../../Components/Spaces/Space20";
import GeneralRequest from "../../../Utils/API/GeneralRequest";
import services from "../../../Constants/Services";
import {openNotification} from "../../../App";
import SimpleCheckbox from "../../../Components/Checkbox/SimpleCheckbox";
import Services from "../../../Constants/Services";
import APIsDialog from "../../../Components/pages/dashboard/api/APIsDialog";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";



const mainFrame = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`
const showDetailTitle = css`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.titleColorOnWhite};
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border: 1px solid ${colors.lightSilver};
  padding: 20px 25px;
  border-radius: 6px;
`
const focusIcon = css`
  color: ${colors.orangeMaterial};
  font-size: 26px;
  margin-right: 3px;
`
const editMenuDescription = css`
  margin: 10px 0 30px;
  font-size: 16px;
`

const EditMenuSection = ({ defaultData, successEdit, selectedItem }) => {

    const [apisDialog, setApisDialog] = useState(false);
    const [list, setList] = useState([]);
    const [form, setForm] = useState({
        text: null,
        title: null,
        showMenu: null,
        active: null,
        command: null,
        action: null,
        order: null
    });

    const navigate = useNavigate();

    useEffect(() => {
        setForm({
            ...form,
            text: defaultData.text,
            title: defaultData.title,
            showMenu: defaultData.showMenu,
            active: defaultData.active,
            command: defaultData.command,
            action: defaultData.action,
            order: defaultData.order,
        });
        console.log(defaultData);
        console.log(defaultData.id);
        GeneralRequest.get(`${Services.loadApis}/${defaultData.id}`)
            .then((res) => {
                if (res.status === 200){
                    console.log(res);
                    setList(res.data)
                }
            })
            .catch(() => {
                openNotification(StaticTexts.notification.failedEditMenu,
                    StaticTexts.common.failIcon)
            })
    }, [defaultData]);

    const handleEditMenu = () => {
        if (form.action === '' || form.command === '' || form.order === '' ||
            form.text === '' || form.title === ''){
            openNotification(StaticTexts.validation.fillAllFiedls,
                StaticTexts.common.failIcon)
        }
        else{
            let formData = {
                "id": defaultData.id,
                "action": form.action === defaultData.action?
                    defaultData.action: form.action,
                "command": form.command === defaultData.command?
                    defaultData.command: form.command,
                "order": form.order === defaultData.order? defaultData.order: form.order,
                "active": form.active ,
                "text": form.text === defaultData.text? defaultData.text: form.text,
                "title": form.title === defaultData.title? defaultData.title: form.title,
                "showMenu": form.showMenu,
                "parentId": defaultData.parentId
            }
            GeneralRequest.post(services.createMenu, formData)
                .then((res) => {
                    if (res.status === 200){
                        window.location.reload();
                        successEdit();
                        openNotification( StaticTexts.notification.successEditMenu,
                            StaticTexts.common.successIcon);
                    }
                })
                .catch(() => {
                    openNotification(StaticTexts.notification.failedEditMenu,
                        StaticTexts.common.failIcon)
                })
        }
    }

    return(
        <div css={mainFrame}>
            {
                apisDialog &&
                <APIsDialog
                    title=''
                    onReject={() => setApisDialog(false)}
                    onApprove={() => setApisDialog(false)} />
            }
            <div css={showDetailTitle}>
                <TbFocus2 css={focusIcon} />
                <span>{StaticTexts.treeView.showDetailTitle}</span>
            </div>
            <p css={editMenuDescription}>
                {StaticTexts.menu.editMenuDescription}
            </p>
            <InputWithLabel
                value={form.text}
                label={StaticTexts.menu.menuText}
                onChange={(e) => setForm({ ...form, text: e})}
            />
            <Space10/>
            <InputWithLabel
                value={form.title}
                label={StaticTexts.menu.menuTitle}
                onChange={(e) => setForm({ ...form, title: e})}
            />
            <Space10/>
            <InputWithLabel
                isNumeric={true}
                label={StaticTexts.menu.order}
                value={form.order}
                onChange={(e) => setForm({ ...form, order: e})} />
            <Space10/>
            <InputWithLabel
                isNumeric={true}
                label={StaticTexts.menu.command}
                value={form.command}
                onChange={(e) => setForm({ ...form, command: e})} />
            <Space10/>
            <InputWithLabel
                isNumeric={true}
                label={StaticTexts.menu.action}
                value={form.action}
                onChange={(e) => setForm({ ...form, action: e})} />
            <Space10/>
            <SimpleCheckbox
                defaultValue={!form.showMenu? defaultData.showMenu: form.showMenu}
                onChange={(e) => setForm({ ...form, showMenu: !form.showMenu})}
                title={StaticTexts.menu.isVisibleMenuQuestion} />
            <Space10/>
            <SimpleCheckbox
                defaultValue={!form.active? defaultData.active: form.active}
                onChange={(e) => setForm({ ...form, active: !form.active})}
                title={StaticTexts.menu.isActiveMenuQuestion} />
            <Space20 />
            <div className='w-full flex justify-start'>
                <Button
                    type='primary'
                    size='large'
                    className='w-fit simpleSubmitButton'
                    onClick={() => navigate('/newShortCode',
                        {state:{mode: 'edit', defaultId: defaultData?.id}})}>
                     Show APIs</Button>
            </div>
            <Space20/>
            <SubmitButton
                title={StaticTexts.common.edit}
                handleClick={handleEditMenu}
                width='100%'
            />
        </div>
    )
}
export default EditMenuSection;
