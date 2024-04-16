/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React, {useState} from 'react';
import * as dashboardStyle from "../../../HOC/DashboardLayout_style";
import {DeleteTwoTone, EditTwoTone, EyeTwoTone} from '@ant-design/icons';
import {Button} from 'antd';
import EditShortCodeDialog from "./EditShortCodeDialog";
import DeleteShortCodeDialog from "./DeleteShortCodeDialog";
import GeneralRequest from "../../../Utils/API/GeneralRequest";
import services from "../../../Constants/Services";
import { useNavigate  } from "react-router-dom";
import {openNotification} from "../../../App";


const buttonStyle = css `
  width: 30px !important;
  height: 30px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 0;
  border: none !important;
  svg{
    font-size: 16px;
  }
`
const actionFrame = css`
  justify-content: flex-start;
  padding-left: 20px;
`
const actionIconStyle = css`
  color: red !important;
`

const ShortCodeRowItem = (props, { history }) => {

    const { id, title, text, status } = props.item;

    const [editParam, setEditParam] = useState({
        dialog: false,
        loading: false
    });
    const [deleteParam, setDeleteParam] = useState({
        dialog: false,
        loading: false
    });
    const [ selectedItem, setSelectedItem ] = useState({});
    const navigate = useNavigate();

    const handleEditButton = (item) => {
        setSelectedItem(item);
        setEditParam({
            ...editParam, dialog: true
        })
    }
    const handleDeleteButton = (item) => {
        setSelectedItem(item);
        setDeleteParam({
            ...deleteParam, dialog: true
        })
    }

    const handleDeleteApi = async () => {
        setDeleteParam({
            ...deleteParam, loading: true
        })
        setTimeout(() => {
            GeneralRequest.delete(`${services.deleteMenu}${id}`)
                .then(() => {
                    props.renderList();
                    setDeleteParam({ dialog: false})
                    openNotification( 'منو با موفقیت حذف شد', '✅')
                })
                .catch(() => {
                    setDeleteParam({ dialog: false});
                    openNotification('مشکلی در حذف منو پیش آمده است!', '❌')
                })
        }, 1000)
    }

    return (
        <ul css={dashboardStyle.dataTableContentRow}>
            {
                editParam.dialog &&
                    <EditShortCodeDialog
                        item={selectedItem}
                        onOpen={editParam.dialog}
                        onCancel={() => setEditParam({...editParam, dialog: false})}
                    />
            }
            {
                deleteParam.dialog &&
                    <DeleteShortCodeDialog
                        item={selectedItem}
                        onOpen={deleteParam.dialog}
                        onOk={handleDeleteApi}
                        loading={deleteParam.loading}
                        onCancel={() => setDeleteParam({...deleteParam, dialog: false})}
                    />
            }
            <li css={dashboardStyle.dataTableContentRowCell('5%')}>{id + 1}</li>
            <li css={dashboardStyle.dataTableContentRowCell('25%')}>{title}</li>
            <li css={dashboardStyle.dataTableContentRowCell('25%')}>{text}</li>
            <li css={dashboardStyle.dataTableContentRowCell('20%')}>{status?
                'Active': 'Not Active'}</li>
            <li css={[dashboardStyle.dataTableContentRowCell('25%'), actionFrame]}>
                <Button css={buttonStyle}
                        onClick={() => handleDeleteButton(props.item)}
                        shape="circle" icon={<DeleteTwoTone css={actionIconStyle} />} />
                <Button css={buttonStyle}
                        onClick={() => handleEditButton(props.item)}
                        shape="circle" icon={<EditTwoTone css={actionIconStyle} />} />
                <Button css={buttonStyle}
                        shape="circle"
                        icon={<EyeTwoTone css={actionIconStyle}
                        onClick={() => navigate('/graph',
                            {state: { item: props.item.id }})}
                />} />
            </li>
        </ul>
    )
}

export default ShortCodeRowItem;