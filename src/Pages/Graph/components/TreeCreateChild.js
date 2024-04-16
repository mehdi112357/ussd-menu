import BaseURL from "../../../Utils/BaseURL";
import {openNotification} from "../../../App";
import StaticTexts from "../../../Constants/En/StaticTexts";

export const createChildrenFunc = (parent, defaultId) => {
    const baseUrl = BaseURL();
    let paramId;
    if (defaultId === undefined && parent === null){
        paramId = ''
    }
    else if(defaultId === undefined && parent !== null){
        paramId = parent.itemData?.id
    }
    else{
        paramId = defaultId.item
    }
    // const parentId = parent? parent?.itemData?.id : '';
    return fetch(`${baseUrl}/menu/list?parentId=${paramId}`)
        .then((response) => response.json())
        .catch(() => {
            throw new Error('Data Loading Error');
        });
};

export const getNodeChildren = (defaultId) => {
    const baseUrl = BaseURL();
    return fetch(`${baseUrl}/menu/list?parentId=${defaultId}`)
        .then((response) => response.json())
        .catch(() => {
            throw new Error('Data Loading Error');
        });
};

export const pasteNode = (src, dest, type) => {
    const baseUrl = BaseURL();
    return fetch(`${baseUrl}/menu/copy?srcId=${src}&destId=${dest}&type=${type}`)
        .then((response) => {
            console.log(response)
            openNotification(StaticTexts.treeView.pasteSuccessfully,
                StaticTexts.common.successIcon);
        })
        .catch(() => {
            openNotification(StaticTexts.treeView.pasteFailed,
                StaticTexts.common.failIcon);
            throw new Error('Data Loading Error');
        });
};


