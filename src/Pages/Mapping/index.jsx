/** @jsxImportSource @emotion/react */
import React, {useEffect, useState} from 'react';
import * as dashboardStyle from "../../HOC/DashboardLayout_style";
import SectionTitle from "../../Containers/Title/SectionTitle";
import {useLocation, useNavigate} from 'react-router-dom';
import SimpleButton from "../../Components/Buttons/SimpleButton";
import Space20 from "../../Components/Spaces/Space20";
import GeneralRequest from "../../Utils/API/GeneralRequest";
import services from "../../Constants/Services";
import {openNotification} from "../../App";
import StaticTexts from "../../Constants/En/StaticTexts";
import BackButton from "../../Components/Buttons/BackButton";
import {Table, Tooltip} from "antd";
import CreateNewMappingDialog from "../../Components/pages/dashboard/mapping/CreateNewMappingDialog";
import Space30 from "../../Components/Spaces/Space30";
import {LiaUserEditSolid} from "react-icons/lia";
import {AiOutlineDelete} from "react-icons/ai";
import ConfirmDialog from "../../Components/Dialog/ConfirmDialog";
import EditMappingDialog from "../../Components/pages/dashboard/mapping/EditMappingDialog";


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
            title: 'Source',
            dataIndex: 'source',
            key: 'source'
        },
        {
            title: 'Destination',
            dataIndex: 'destination',
            key: 'destination'
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
        await GeneralRequest.get(`${services.apiResponseMappingList}/${defaultId}`)
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
        GeneralRequest.delete(`${services.apiResponseMappingDelete}/${selectedItem}`)
            .then((res) => {
                if (res.status === 200) {
                    setDeleteLoading(false);
                    setDialog({...dialog, delete: false})
                    openNotification(StaticTexts.notification.successDeleteMapping,
                        StaticTexts.common.successIcon);
                    getList();
                }
            })
            .catch(() => {
            })
    }

    return (
        <div css={dashboardStyle.dashContentFrame}>
            <SectionTitle title='Mapping' />
            <div className='w-full contentBoxStyle'>
                {
                    dialog.new &&
                    <CreateNewMappingDialog
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
                    <EditMappingDialog
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
                        title='Delete mapping'
                        message='Are you sure to delete mapping?'
                        onApprove={handleDeleteApi}
                        loading={deleteLoading}
                        onCancel={() => setDialog({...dialog, delete: false})}
                    />
                }
                <div className='w-full box-border p-5 flex flex-col items-start'>
                    <BackButton
                        title='Return to APIs'
                        onClick={() => navigate(-1)}
                    />
                    <div className='w-full flex justify-end my-5'>
                        <SimpleButton
                            size='large'
                            onClick={() => setDialog({...dialog, new: true})}
                            title='Add new'/>
                    </div>
                    <Table
                        className='w-full'
                        columns={columns}
                        loading={loading}
                        dataSource={list}/>
                </div>
            </div>
        </div>
    )
}

export default Index;