/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import {Table, Tooltip} from "antd";
import GeneralRequest from "../../../../Utils/API/GeneralRequest";
import services from "../../../../Constants/Services";
import * as colors from '../../../../Constants/Colors/Colors';
import {HiOutlineChevronRight} from "react-icons/hi";
import {AiOutlineDelete, AiOutlineExperiment, AiOutlineEye, AiOutlinePullRequest} from "react-icons/ai";
import {LiaUserEditSolid} from "react-icons/lia";
import SimpleButton from "../../../Buttons/SimpleButton";
import CreateApiFormDialog from "./CreateApiFormDialog";
import Space20 from "../../../Spaces/Space20";
import {openNotification} from "../../../../App";
import StaticTexts from "../../../../Constants/En/StaticTexts";
import ConfirmDialog from "../../../Dialog/ConfirmDialog";
import ViewApiDialog from "./ViewApiDialog";
import {useNavigate} from "react-router-dom";
import BackButton from "../../../Buttons/BackButton";


const formFrame = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const backToMenu = css`
  background-color: transparent;
  display: flex;
  align-items: center;
  color: ${colors.titleColorOnWhite};
  height: 46px;
  font-size: 15px;
  margin: 0 5px 20px;
  font-weight: 900;
  cursor: pointer;
  transition-duration: 0.3s;
  svg{
    font-size: 28px;
  }
`


const MenuApiList = ({list, isEdit, renderList, backButton, menuID, defaultId}) => {

    const [newApiDialog, setNewApiDialog] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [selectedApi, setSelectedApi] = useState(null);

    const navigate = useNavigate();
    const [search, setSearch] = useState({
        array: [],
        menuId: null,
        webService: null
    })
    const [dialog, setDialog] = useState({
        edit: false,
        view: false,
        delete: false,
    })

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
            title: 'Method',
            dataIndex: 'httpMethod',
            key: 'httpMethod'
        },
        {
            title: 'Header',
            dataIndex: 'header',
            key: 'header'
        },
        {
            title: 'Url',
            dataIndex: 'url',
            key: 'url'
        },
        {
            title: 'Name Title',
            dataIndex: 'nextMenuTitle',
            key: 'nextMenuTitle',
        },
        {
            title: 'Name Text',
            dataIndex: 'nextMenuText',
            key: 'nextMenuText',
        },
        {
            title: '',
            key: 'action',
            render: (item) => (
                <div className='flex justify-end'>
                    <Tooltip title='Validators'>
                        <AiOutlineExperiment
                            className='text-[20px] text-gray-600 cursor-pointer hover:text-yellow-500
                        duration-300 mr-1'
                            onClick={() => navigate('/validator',
                                {state:{defaultId: item.id}})}
                        />
                    </Tooltip>
                    <Tooltip title='Mapping'>
                        <AiOutlinePullRequest
                            className='text-[20px] text-gray-600 cursor-pointer hover:text-red-600
                        duration-300 mr-1'
                            onClick={() => navigate('/mapping',
                                {state:{defaultId: item.id}})}
                        />
                    </Tooltip>
                    <Tooltip title='Detail'>
                        <AiOutlineEye
                            className='text-[22px] text-gray-600 cursor-pointer hover:text-green-600
                        duration-300 mr-1'
                            onClick={() => {
                                setDialog({...dialog, view: true});
                                setSelectedApi(item.id);
                            }}
                        />
                    </Tooltip>
                    {/*<Tooltip title='Edit'>*/}
                    {/*    <LiaUserEditSolid*/}
                    {/*        className='text-[22px] text-gray-600 cursor-pointer hover:text-orange-600*/}
                    {/*        duration-300 mr-1'*/}
                    {/*        onClick={() => {*/}
                    {/*            setDialog({...dialog, edit: true});*/}
                    {/*            setSelectedApi(item.id);*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</Tooltip>*/}
                    <Tooltip title='delete'>
                        <AiOutlineDelete className='text-[20px] text-gray-600 cursor-pointer
                        hover:text-red-600 duration-300'
                                         onClick={() => {
                                             setDialog({...dialog, delete: true});
                                             setSelectedApi(item.id);
                                         }}
                        />
                    </Tooltip>
                </div>
            ),
        },
    ];

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

    const handleDeleteApi = () => {
        setDeleteLoading(true);
        GeneralRequest.delete(`${services.deleteApi}/${selectedApi}`)
            .then((res) => {
                renderList();
                openNotification(StaticTexts.notification.successDeleteMenuApi,
                    StaticTexts.common.successIcon)
            })
            .catch(() => {
                openNotification(StaticTexts.notification.errorDeletingMenuApi,
                    StaticTexts.common.failIcon)
            })
            .finally(() => {
                setDeleteLoading(false);
                setDialog({...dialog, delete: false});
            })
    }

    const handleAddApi = () => {
        setNewApiDialog(false);
        renderList();
    }

    return(
        <div css={formFrame}>
            <>
                {
                    !isEdit && defaultId &&
                    <div className='w-full flex justify-start mb-5'>
                        <BackButton
                            title='Back'
                            onClick={backButton}
                        />
                    </div>
                }
                {
                    newApiDialog &&
                    <CreateApiFormDialog
                        mode='create'
                        onApprove={handleAddApi}
                        menuID={menuID}
                        onCancel={() => setNewApiDialog(false)} />
                }
                {
                    dialog.edit &&
                    <CreateApiFormDialog
                        mode='edit'
                        onApprove={handleAddApi}
                        menuID={menuID}
                        apiId={selectedApi}
                        onCancel={() => setDialog({...dialog, edit: false})} />
                }
                {
                    dialog.delete && <ConfirmDialog
                        title='Delete API'
                        message='Are you sure to delete API'
                        onApprove={handleDeleteApi}
                        loading={deleteLoading}
                        onCancel={() => setDialog({...dialog, delete: false})}
                    />
                }
                {
                    dialog.view && <ViewApiDialog
                        title='API details'
                        apiId={selectedApi}
                        onApprove={handleDeleteApi}
                        loading={deleteLoading}
                        onCancel={() => setDialog({...dialog, view: false})}
                    />
                }
                <SimpleButton
                    size='large'
                    onClick={() => setNewApiDialog(true)}
                    title='New Api' />
                <Space20/>
                <Table
                    className='w-full'
                    columns={columns}
                    dataSource={list}/>
            </>
        </div>
    )
}

export default MenuApiList;
