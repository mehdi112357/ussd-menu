

const StaticTexts = {
    dashboardMainTitle: 'USSD Menu Management System',
    dashboardHomeSideMenu: 'Home',
    dashboardShortCodeSideMenu: 'Short code',
    dashboardGraphSideMenu: 'Menu tree',
    dashboardSimulatorSideMenu: 'Simulator',
    dashboardMenuSideMenu: 'USSD menu',
    dashboardReportSideMenu: 'Reporting',
    dashboardSettingSideMenu: 'Setting',
    dashboardLogoutSideMenu: 'Log out',
    common: {
        operation: 'Operation',
        successIcon: '✅',
        failIcon: '❌',
        approve: 'Approve',
        edit: 'Edit',
        save: 'Save',
        searchResult: 'Search result',
        noDataToShow: 'No item founded!'
    },
    treeView: {
        showDetailTitle: 'Show detail',
        successDeleteMenu: 'Menu deleted successfully',
        errorDeletingMenu: 'Error deleting menu!',
        deleteMenuTitle: 'Delete menu',
        deleteMenuDescription: 'With deleting menu, all its sub menus wil be deleted',
        unRemovableWithChildNodes: 'Menu with sub menus or APIs are not deletable',
        pasteSuccessfully: 'Menu added successfully',
        pasteFailed: 'Error pasting menu!',
    },
    validation: {
        emptyTextMenuError: 'Please enter menu text',
        fillAllFiedls: 'Please fill all the fields'
    },
    menu: {
        editMenuDescription: 'For editing menu, please complete all fileds',
        menuText:  'Text',
        menuTitle: 'Title',
        isVisibleMenuQuestion: 'Show menu?',
        isActiveMenuQuestion: 'Active menu?',
        order: 'Order',
        action: 'Operation',
        command: 'Command',
    },
    notification: {
        successMenuSubmit: 'Menu create successfully',
        failedMenuSubmit: 'Error creating menu !',
        successEditMenu: 'Menu edited successfully',
        failedEditMenu: 'Error editing menu !',
        noDataToShow: 'No item to show!',
        errorLoadingData: 'Error getting data from server!',
        addMobileNumberSuccess: 'Mobile edited successfully',
        successDeleteMenuApi: 'API deleted successfully',
        successDeleteMapping: 'Mapping deleted successfully',
        errorDeletingMenuApi: 'Error deleting API',
        errorDeletingMapping: 'Error deleting mapping',
        successDeleteValidator: 'Validator deleted successfully',
        errorDeletingValidator: 'Error deleting validator',
    }
}

export default StaticTexts;
