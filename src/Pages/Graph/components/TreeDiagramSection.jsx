/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useCallback, useRef, useState} from 'react';
import TreeView from 'devextreme-react/tree-view';
import {ContextMenu} from "devextreme-react/context-menu";
import {Input, Spin} from "antd";
import GeneralRequest from "../../../Utils/API/GeneralRequest";
import services from "../../../Constants/Services";
import {openNotification} from "../../../App";
import EditMenuSection from "./EditMenuSection";
import {menuItems, searchEditorOptions} from "../../../Constants/Menu/MenuValues";
import StaticTexts from "../../../Constants/En/StaticTexts";
import {createChildrenFunc, pasteNode} from "./TreeCreateChild";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedNode} from "../../../Redux/Reducer/treeSlice";
import Space30 from "../../../Components/Spaces/Space30";
import SearchResult from "./SearchResult";
import ConfirmDialog from "../../../Components/Dialog/ConfirmDialog";


const mainFrame = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const treeFrame = css`
  position: relative;
  width: 55%;
`
const previewFrame = css`
  display: flex;
  justify-content: flex-end;
  width: 35%;
`
const loadingFrame = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 11;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 150px;
`
const treeItemStyle = css`
  display: flex;
  align-items: center;
`
const treeItemCommandNumber = css`
  margin-right: 5px;
`
const searchInput = css`
  min-height: 68px;
`



const TreeDiagramSection = ({ defaultId , navigation}) => {

    const [ searchValue, setSearchValue] = useState('');
    const contextMenuRef = useRef(null);
    const treeViewRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [logItems, setLogItems] = useState([]);
    const [selectedTreeItem, setSelectedTreeItem] = useState(null);
    const [selectEditItem, setSelectEditItem] = useState(null);
    const [counter, setCounter] = useState(0);
    const [searchResult, setSearchResult] = useState([]);
    const [dialog, setDialog] = useState({
        delete: false
    });

    const dispatch = useDispatch();
    const selectedCopy = useSelector(state => state.tree.selectedNode);
    const treeViewItemContextMenu = useCallback((e) => {
        setSelectedTreeItem(e.itemData);
    }, [selectEditItem]);

    const handleDeleteMenu = (id) => {
        setLoading(true);
        GeneralRequest.delete(`${services.deleteMenu}${id}`)
            .then(() => {
                openNotification( StaticTexts.treeView.successDeleteMenu,
                    StaticTexts.common.successIcon);
                setDialog({...dialog, delete: false})
            })
            .catch(() => {
                openNotification(StaticTexts.treeView.errorDeletingMenu,
                    StaticTexts.common.failIcon)
            })
            .finally(() => {
                setLoading(false);
                setDialog({...dialog, delete: false})
            })
    }

    const handleSearch = (value) => {
        setSearchValue(value);
        if (value.length > 3){
            GeneralRequest.get(`${services.searchMenu}${value}`)
                .then((res) => {
                    setSearchResult(res.data);
                })
                .catch(() => {})
        }
        else{
            setSelectEditItem(null)
        }
    }

    const treeItem = (value) => {
        return(
            <div css={treeItemStyle}>
                { value.data.command? `${value.data.command}- `: null }
                <span css={treeItemCommandNumber}>{value.data.text}</span>
            </div>
        )
    }

    const searchResultItemClick = (id) => {
        GeneralRequest.get(`${services.loadMenu}${id}`)
            .then((res) => {
                setSelectEditItem(res.data);
            })
            .catch(() => {
                openNotification(StaticTexts.treeView.errorDeletingMenu,
                    StaticTexts.common.failIcon)
            })
    }

    const contextMenuItemClick = useCallback((e) => {
        let logEntry = '';

        switch (e.itemData.id) {
            case 'create':
                navigation('/newShortCode', {
                    state: {
                        parentId: selectedTreeItem.id,
                        text: selectedTreeItem.text,
                        mode: 'create'
                    }
                });
                break;
            case 'edit':
                setSelectEditItem(selectedTreeItem);
                break;
            case 'singleCopy':
                dispatch(setSelectedNode({ id: selectedTreeItem.id, type: 'JUST_NODE' }));
                break;

            case 'copyJustChild':
                dispatch(setSelectedNode({ id: selectedTreeItem.id, type: 'JUST_CHILD' }));
                break;

            case 'copyAll':
                dispatch(setSelectedNode({ id: selectedTreeItem.id, type: 'NODE_WITH_CHILD' }));
                break;
            case 'paste':
                pasteNode(selectedCopy.id, selectedTreeItem.id, selectedCopy.type)
                // setSelectEditItem(selectedTreeItem);
                break;
            case 'delete':
                setDialog({...dialog, delete: true});
                setSelectedTreeItem(selectedTreeItem.id);
                break;

            default:
                break;
        }

        const updatedLogItems = [...logItems, logEntry];
        setLogItems(updatedLogItems);
    }, [logItems, selectedTreeItem, setLogItems]);

    return(
        <div css={mainFrame}>
            {
                dialog.delete &&
                <ConfirmDialog
                    title='Delete menu'
                    message='When deleting menu, all menu APIs will be deleted too'
                    onApprove={() => handleDeleteMenu(selectedTreeItem)}
                    onCancel={() => setDialog({...dialog, delete: false})}
                />
            }
            <ContextMenu
                ref={contextMenuRef}
                dataSource={menuItems}
                target="#treeview .dx-treeview-item"
                onItemClick={contextMenuItemClick}
            />
            <div css={previewFrame}>
                {
                    selectEditItem &&
                    <EditMenuSection
                        successEdit={() => setCounter(counter+1)}
                        defaultData={selectEditItem} />
                }
            </div>
            <div css={treeFrame}>
                {
                    loading?
                        <div css={loadingFrame}>
                            <Spin size={11} />
                        </div>:
                        <div className='flex flex-col'>
                            <Input
                                type='text'
                                size='large'
                                css={searchInput}
                                allowClear={true}
                                placeholder='Search menu ...'
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                            <Space30 />
                            {
                                searchValue.length > 3?
                                    <SearchResult
                                        data={searchResult}
                                        onItemSelect={(id) => searchResultItemClick(id)}
                                    />:
                                    <TreeView
                                        rtlEnabled={true}
                                        id="treeview"
                                        ref={treeViewRef}
                                        data={treeViewRef}
                                        dataStructure="plain"
                                        // rootValue={defaultId?.item?? ''}
                                        // createChildren={(parent) => createChildrenFunc(parent, defaultId)}
                                        height={800}
                                        itemComponent={(e) => treeItem(e)}
                                        // onItemClick={(e) => console.log(e.itemData)}
                                        createChildren={(parent) =>
                                            createChildrenFunc(defaultId? defaultId.item: parent)}
                                        searchEnabled={false}
                                        noDataText=''
                                        onItemContextMenu={treeViewItemContextMenu}
                                        searchEditorOptions={searchEditorOptions}
                                    />
                            }
                        </div>
                }
            </div>
        </div>
    )
}
export default TreeDiagramSection;
