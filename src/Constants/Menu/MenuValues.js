export const OperatorList = [
    { id: 0, label: 'همراه اول', value: 'همراه اول'},
    { id: 1, label: 'ایرانسل', value: 'ایرانسل'},
    { id: 2, label: 'رایتل', value: 'رایتل'}
];

export const DialPadList = [
    { id: 0, title: '1', subTitle: '-'},
    { id: 1, title: '2', subTitle: 'ABC'},
    { id: 2, title: '3', subTitle: 'DEF'},
    { id: 3, title: '4', subTitle: 'GHI'},
    { id: 4, title: '5', subTitle: 'JKL'},
    { id: 5, title: '6', subTitle: 'MNO'},
    { id: 6, title: '7', subTitle: 'PQRS'},
    { id: 7, title: '8', subTitle: 'TUV'},
    { id: 8, title: '9', subTitle: 'WXYZ'},
    { id: 9, title: '*', subTitle: null},
    { id: 10, title: '0', subTitle: '+'},
    { id: 11, title: '#', subTitle: null}
];


export const ShortCodesList = [
    { id: 0, title: 'HamrahMenu', shortCode: '*1#', operator: 'همراه اول'},
    { id: 1, title: 'IrancellMenu', shortCode: '*1#', operator: 'ایرانسل'},
    { id: 2, title: 'Nikookari', shortCode: '*1*5#', operator: 'ایرانسل'},
    { id: 3, title: 'Arbaein', shortCode: '*1*40#', operator: 'همراه اول' },
    { id: 4, title: 'shabeYalda', shortCode: '*1*10#', operator: 'همراه اول' },
];

export const ShortCodeActions = [
    { id: 0, title: 'Begin', value: 1 },
    { id: 1, title: 'Continue', value: 2 },
    { id: 2, title: 'End', value: 3 }
];
export const subShortCodeActions = [
    { id: 1, title: 'Continue', value: 2 },
    { id: 2, title: 'End', value: 3 }
];
export const ShortCodesStates = [
    { id: 0, title: 'Active', value: 1 },
    { id: 1, title: 'Inactive', value: 2 }
];
export const ShortCodesOrders = [
    { id: 0, title: 1, value: 1 },
    { id: 1, title: 2, value: 2 },
    { id: 2, title: 3, value: 3 }
];
export const searchEditorOptions = {
    placeholder: 'Search menu ...',
    mode: 'text'
};

export const menuItems = [
    { id: 'create', text: 'Create submenu', action: 'sub' },
    { id: 'edit', text: 'Edit', action: 'edit' },
    // { id: 'singleCopy', text: 'کپی آیتم', action: 'singleCopy' },
    { id: 'copyJustChild', text: 'Copy submenus', action: 'copyJustChild' },
    { id: 'copyAll', text: 'Copy with main node', action: 'copyAll' },
    { id: 'paste', text: 'Paste', action: 'paste' },
    { id: 'delete', text: 'Delete', action: 'delete' },
];
export const nextMenuAPI = [
    {
        value: 'menuId',
        label: 'Next by menu Id',
    },
    {
        value: 'webService',
        label: 'Next by web service',
    }
];
export const httpMethods = [
    {
        value: 'GET',
        label: 'Get',
    },
    {
        value: 'POST',
        label: 'Post',
    },
    {
        value: 'PUT',
        label: 'Patch',
    },
    {
        value: 'DELETE',
        label: 'Delete',
    }
];

export const logicalOperation = [
    {
        value: 'AND',
        label: 'And',
    },
    {
        value: 'OR',
        label: 'Or',
    },
    {
        value: 'EQUAL',
        label: 'Equal',
    },
    {
        value: 'NOT_EQUAL',
        label: 'Not equal',
    },

];