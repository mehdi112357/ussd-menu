/** @jsxImportSource @emotion/react */
import React, {useEffect, useState} from 'react';
import * as dashboardStyle from "../../HOC/DashboardLayout_style";
import SectionTitle from "../../Containers/Title/SectionTitle";
import {useLocation, useNavigate} from 'react-router-dom';
import SimpleButton from "../../Components/Buttons/SimpleButton";
import GeneralRequest from "../../Utils/API/GeneralRequest";
import services from "../../Constants/Services";
import {openNotification} from "../../App";
import StaticTexts from "../../Constants/En/StaticTexts";
import BackButton from "../../Components/Buttons/BackButton";
import {Table, Tooltip} from "antd";
import {LiaUserEditSolid} from "react-icons/lia";
import {AiOutlineDelete} from "react-icons/ai";
import ConfirmDialog from "../../Components/Dialog/ConfirmDialog";
import CreateNewValidatorDialog from "../../Components/pages/dashboard/validator/CreateNewValidatorDialog";
import EditValidatorDialog from "../../Components/pages/dashboard/validator/EditValidatorDialog";


const Index = () => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(false);
    const [dialog, setDialog] = useState({
        new: false,
        edit: false,
        delete: false
    });


    const location = useLocation();
    const navigate = useNavigate();
    let defaultId = location.state.defaultId;

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
            title: 'Order',
            dataIndex: 'order',
            key: 'order'
        },
        {
            title: 'Url',
            dataIndex: 'menuOperationURL',
            key: 'menuOperationURL'
        },
        {
            title: 'Parameter',
            dataIndex: 'parameter',
            key: 'parameter'
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value'
        },
        {
            title: 'Logical operation',
            dataIndex: 'logicalOperation',
            key: 'logicalOperation',
            render: (item) => (
                <div>{item?? '-'}</div>
            )
        },
        {
            title: 'Next operation',
            dataIndex: 'nextLogicalOperation',
            key: 'nextLogicalOperation',
            render: (item) => (
                <div>{item?? '-'}</div>
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
                                setSelectedItem(item);
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
    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        setLoading(true);
        await GeneralRequest.get(`${services.apiValidatorList}/${defaultId}`)
            .then((res) => {
                let result = res.data;
                setList(result)
            })
            .catch(() => {
                openNotification(StaticTexts.notification.errorLoadingData,
                    StaticTexts.common.failIcon)
            })
            .finally(() => setLoading(false))
    }

    const handleDeleteApi = () => {
        setDeleteLoading(true);
        GeneralRequest.delete(`${services.apiValidatorDelete}/${selectedItem}`)
            .then((res) => {
                if (res.status === 200){
                    setDialog({...dialog, delete: false})
                    openNotification(StaticTexts.notification.successDeleteValidator,
                        StaticTexts.common.successIcon);
                    getList();
                }
            })
            .catch(() => openNotification(StaticTexts.notification.errorDeletingValidator,
                StaticTexts.common.failIcon))
            .finally(() => setDeleteLoading(false))
    }

    return (
        <div css={dashboardStyle.dashContentFrame}>
            <SectionTitle title='Validator' />
            {
                dialog.new &&
                <CreateNewValidatorDialog
                    apiId={defaultId}
                    onApprove={() => {
                        setDialog({...dialog, new: false});
                        getList();
                    }}
                    onCancel={() => setDialog({...dialog, new: false})}
                />
            }
            {
                dialog.edit &&
                <EditValidatorDialog
                    item={selectedItem}
                    apiId={defaultId}
                    onApprove={() => {
                        setDialog({...dialog, edit: false});
                        getList();
                    }}
                    onCancel={() => setDialog({...dialog, edit: false})}
                />
            }
            {
                dialog.delete && <ConfirmDialog
                    title='Delete validator'
                    message='Are you sure to delete validator?'
                    onApprove={handleDeleteApi}
                    loading={deleteLoading}
                    onCancel={() => setDialog({...dialog, delete: false})}
                />
            }
            <div className='box-border p-5 flex flex-col items-start'>
                <BackButton
                    title='Return to APIs'
                    onClick={() => navigate(-1)}
                />
                <div className='w-full flex justify-end my-5'>
                    <SimpleButton
                        size='large'
                        onClick={() => setDialog({...dialog, new: true})}
                        title='Add new' />
                </div>
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