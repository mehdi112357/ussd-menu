/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import * as dashboardStyle from "../../HOC/DashboardLayout_style";
import SectionTitle from "../../Containers/Title/SectionTitle";
import { Collapse } from 'antd';
import CreateNewMenu from "./CreateNewMenu";
import MenuApiList from "../../Components/pages/dashboard/api/menuApiList";
import {useLocation} from 'react-router-dom';
import GeneralRequest from "../../Utils/API/GeneralRequest";
import Services from "../../Constants/Services";
import {openNotification} from "../../App";
import StaticTexts from "../../Constants/En/StaticTexts";



const contentBoxStyle = css `
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;
  align-items: flex-end;
  h3{
    //direction: rtl;
    justify-content: flex-start;
  }
`

const Index = () => {

    const [step, setStep] = useState(null);
    const [createdMenuId, setCreatedMenuId] = useState(null);
    const [apiList, setApiList] = useState([]);


    const location = useLocation();
    console.log(location);

    useEffect(() => {
        setStep(location?.state?.mode === 'edit'? 2: 1);
        if (location?.state?.mode === 'edit'){
            getApiList(location.state.defaultId);
        }
    }, [])
    useEffect(() => {
    }, [createdMenuId, apiList]);


    let createForm =
        <CreateNewMenu
            moveToNext={() => setStep(2)}
            handleCreation={(value) => {
                console.log(value);
                setStep(2);
                setCreatedMenuId(value);
                getApiList(value);
            }} />

    let apiForm =
        <MenuApiList
            defaultId={location.state? location.state.defaultId: null}
            isEdit={location?.state?.mode === 'edit'}
            list={apiList}
            // renderList={() => getApiList(location.state? location.state.defaultId:
            //     createdMenuId)}
            renderList={() => getApiList(createdMenuId? createdMenuId:
                location.state.defaultId)}
            backButton={() => setStep(1)}
            menuID={createdMenuId? createdMenuId: location.state? location.state.defaultId: ''}
        />

    const getApiList = (id) => {
        GeneralRequest.get(`${Services.loadApis}/${id}`)
            .then((res) => {
                if (res.status === 200){
                    setApiList(res.data)
                }
            })
            .catch(() => {
                openNotification(StaticTexts.notification.failedEditMenu,
                    StaticTexts.common.failIcon)
            })
    }
    return (
        <div css={dashboardStyle.dashContentFrame}>
            <SectionTitle
                title='New shortcode'
                subTitle='Fill the values to submit new shortcode'
            />
            <div css={contentBoxStyle}>
                {location?.state?.mode !== 'edit' && createForm}
                {
                    step === 2 && <div className='w-full mt-10'>
                        {apiForm}
                    </div>
                }
                {/*<Collapse*/}
                {/*    activeKey={step}*/}
                {/*    bordered={false}*/}
                {/*    showArrow={false}*/}
                {/*    expandIcon={() => {}}*/}
                {/*    className='createMenuCollapse'*/}
                {/*    onChange={() => setStep(2)}*/}
                {/*>*/}
                {/*    <Collapse.Panel*/}
                {/*        onChange={() => setStep(prev => [1])}*/}
                {/*        header=""*/}
                {/*        key="1">*/}
                {/*        {createForm}*/}
                {/*    </Collapse.Panel>*/}
                {/*    <Collapse.Panel*/}
                {/*        onChange={() => setStep(prev => [2])}*/}
                {/*        header=""*/}
                {/*        key="2">*/}
                {/*        {apiForm}*/}
                {/*    </Collapse.Panel>*/}
                {/*</Collapse>*/}
            </div>
        </div>
    )
}

export default Index;