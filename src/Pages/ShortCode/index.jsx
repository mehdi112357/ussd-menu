/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React, {useEffect, useState} from 'react';
import * as dashboardStyle from "../../HOC/DashboardLayout_style";
import SectionTitle from "../../Containers/Title/SectionTitle";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import * as colors from "../../Constants/Colors/Colors";
import {HiOutlineViewGridAdd} from "react-icons/hi";
import GeneralRequest from "../../Utils/API/GeneralRequest";
import {openNotification} from "../../App";
import StaticTexts from "../../Constants/En/StaticTexts";
import services from "../../Constants/Services";
import { Table, Tooltip} from "antd";
import {LiaUserEditSolid} from "react-icons/lia";
import {AiOutlineDelete} from "react-icons/ai";
import ConfirmDialog from "../../Components/Dialog/ConfirmDialog";


const contentBoxFrame = css `
  display: flex;
  position: relative;
  flex-direction: column;
`

const Index = () => {

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: (item) => (
                <div className='font-latin'>{item}</div>
            )
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Command',
            dataIndex: 'command',
            key: 'command'
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            render: (item) => (
                <div>{item? 'Active': 'Inactive'}</div>
            )
        },
        {
            title: '',
            key: 'action',
            render: (item) => (
                <div className='flex justify-end'>
                    <Tooltip title='Edit'>
                        <LiaUserEditSolid
                            className='text-[22px] text-gray-600 cursor-pointer hover:text-orange-600
                            duration-300 mr-1'
                            onClick={() => {
                                setDialog({...dialog, edit: true});
                                // setSelectedItem(item);
                            }}
                        />
                    </Tooltip>
                    <Tooltip title='delete'>
                        <AiOutlineDelete className='text-[20px] text-gray-600 cursor-pointer
                        hover:text-red-600 duration-300'
                                         onClick={() => {
                                             setDialog({...dialog, delete: true});
                                             setSelectedItem(item.id);
                                         }}
                        />
                    </Tooltip>
                </div>
            ),
        },
    ];

    const [list, setList] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [dialog, setDialog] = useState({
        new: false,
        edit: false,
        delete: false
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getShortCodeList();
    }, []);
    useEffect(() => {
    }, [list]);

    const navigate = useNavigate();
    const getShortCodeList = async () => {
        await GeneralRequest.get(services.menuList)
            .then((res) => {
                setList(res.data);
            })
            .catch(() => {
                openNotification(StaticTexts.notification.errorLoadingData,
                    StaticTexts.common.failIcon)
            })
            .finally(() => setLoading(false))
    }

    const handleDelete = async () => {
        await GeneralRequest.delete(`${services.deleteMenu}/${selectedItem}`)
            .then((res) => {
                setDialog({
                    ...dialog, delete: false
                });
                openNotification(StaticTexts.notification.successDeleteMenuApi,
                    StaticTexts.common.successIcon);
                getShortCodeList();
            })
            .catch(() => {
                openNotification(StaticTexts.notification.errorDeletingMenuApi,
                    StaticTexts.common.failIcon)
            })
            .finally(() => setLoading(false))
    }

    return (
        <div css={dashboardStyle.dashContentFrame}>
            <div>
                <SectionTitle title={StaticTexts.dashboardShortCodeSideMenu} />
                <div className='w-full flex justify-end mb-10'>
                    <SubmitButton
                        type="primary"
                        title='New shortcode'
                        backgroundColor={colors.greenMaterial}
                        handleClick={() => navigate("/newShortCode")}
                    />
                </div>
            </div>
            {
                dialog.delete && <ConfirmDialog
                    title='Delete shortcode'
                    message='Menu with sub items can not be deleted'
                    onCancel={() => setDialog({ ...dialog, delete: false})}
                    onApprove={() => handleDelete()}
                />
            }
            <div css={contentBoxFrame}>
                {/*<ul css={dashboardStyle.dataTableHeader}>*/}
                {/*    <li css={dashboardStyle.dataTableHeaderCell('5%')}>شناسه</li>*/}
                {/*    <li css={dashboardStyle.dataTableHeaderCell('25%')}>عنوان</li>*/}
                {/*    <li css={dashboardStyle.dataTableHeaderCell('25%')}>کد دستوری</li>*/}
                {/*    <li css={dashboardStyle.dataTableHeaderCell('20%')}>وضعیت</li>*/}
                {/*    <li css={dashboardStyle.dataTableHeaderCell('25%')} />*/}
                {/*</ul>*/}
                {/*<div css={dashboardStyle.tableContentFrame}>*/}
                {/*    {*/}
                {/*        listLoading?*/}
                {/*            <Spin spinning={true} fullscreen size='large' />:*/}
                {/*            list.length > 0?*/}
                {/*                list.map((item, key) =>*/}
                {/*                <ShortCodeRowItem*/}
                {/*                    item={item} key={key}*/}
                {/*                    renderList={getShortCodeList}*/}
                {/*                />):*/}
                {/*                <h2>{StaticTexts.notification.noDataToShow}</h2>*/}
                {/*    }*/}
                {/*</div>*/}
                <Table
                    className='w-full'
                    columns={columns}
                    loading={loading}
                    dataSource={list}/>
            </div>
        </div>
    )
}

export default Index;