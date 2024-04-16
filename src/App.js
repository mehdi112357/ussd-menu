import React from "react";
import {Global, css} from '@emotion/react';
import Router from "./Routes/Routes";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import * as colors from './Constants/Colors/Colors';
import {ConfigProvider, notification} from "antd";
import reduxStore from './Redux/Store/Store';
import {Provider} from "react-redux";



////////////////////// Global Styling ////////////////////////
const globalStyles = () => css`

  @font-face {
    font-family: "mainFont";
    src: local('mainFont'), url('./fonts/iransans.woff') format('truetype');
  }

  * {
    //font-family: 'mainFont';
    margin: 0;
    padding: 0;
  }

  input {
    font-family: 'mainFont' !important;
  }

  .overlayFakeFrame {
    width: 100%;
    height: 100%;
    background-color: transparent;
    top: 0;
    cursor: default;
    left: 0;
    z-index: 1002;
    position: fixed;
  }

  .overlayDarkFakeFrame {
    width: 100%;
    height: 100%;
    background-color: transparent;
    top: 0;
    cursor: default;
    left: 0;
    z-index: 1002;
    position: fixed;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0 !important;

  }

  .Mui-expanded {
    min-height: 25px !important;
  }

  iframe {
    display: none !important;
  }

  .websiteSimpleText {
    font-size: 14px;
    line-height: 26px;
    font-weight: 900;
    color: ${colors.middleSilver};
  }

  .relativePosition {
    position: relative;
  }

  .highcharts-label {
    text {
      fill: ${colors.titleColorOnWhite} !important;
      font-size: 15px !important;
    }
  }

  //Data Table Styles
  .dataTableStyle {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;

    & > div {
      transition-duration: 0.3s;
    }

    & > div:hover {
      background-color: ${colors.state200} !important;
    }

    & > div:nth-of-type(odd) {
      background-color: ${colors.state100};
    }

    @media (max-width: 768px) {
      & > div:nth-of-type(odd) {
        background-color: ${colors.state300};
      }
    }
  }

  .inRowFlexItemsSpaceBetweenAlignStart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .dataTableHeader {
    width: 100%;
    padding: 0 10px !important;
    list-style: none;
    border-bottom: 2px solid ${colors.middleSilver};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      background-color: ${colors.state300};
    }
  }

  .websitePageContentFrame {
    position: relative;
    padding-top: 50px;
  }

  .dataTableContentRow {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    padding: 15px 5px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .changeRouteLoading {
    position: relative;
    width: 100%;
    height: 3px;
    overflow: hidden;
    top: 0;
    left: 0;
  }

  .dashboardAccordionMenuItem {
    border: none;
  }

  .ant-collapse-header {
    flex-direction: row-reverse;
  }
  //.ant-notification-notice-wrapper{
  //  direction: rtl;
  //}
  .ant-notification-notice-message{
    margin-bottom: 0 !important;
  }
  .ant-notification-notice-icon{
    top: 33px;
  }
  .dashboardAccordionMenuItem .ant-collapse-item {
    border-bottom: none
  }

  .dashboardAccordionMenuItem .ant-collapse-item .ant-collapse-header {
    justify-content: space-between;
    padding: 12px 0;
  }

  .dashboardAccordionMenuItem .ant-collapse-item .ant-collapse-content {
    border-top: none;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 5px 12px;
  }


  @media (min-width: 1200px) {
    .myContainer {
      width: 100%;
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .websiteContainer {
      width: 1290px;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
  @media (min-width: 1400px) {
    .myContainer {
      width: 100%;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .myContainer {
      width: 100%;
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .websiteContainer {
      width: 1100px;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .myContainer {
      width: 100%;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
  @media only screen and (max-width: 767px) {
    .myContainer {
      width: 92% !important;
      margin-left: 1em !important;
      margin-right: 1em !important;
    }

    .websiteContainer {
      width: 92%;
      margin-left: 1em !important;
      margin-right: 1em !important;
    }

    .hiddenInMobile {
      display: none
    }
  }
`
export const openNotification = (message, icon) => {
    notification.info({
        message: message,
        duration: 2,
        placement: 'bottomRight',
        icon: icon
    });
};


let persistor = persistStore(reduxStore);

function App() {

    return (
        <Provider store={reduxStore}>
            <PersistGate loading={null} persistor={persistor}>
                <ConfigProvider>
                    <Global styles={globalStyles}/>
                    <Router/>
                </ConfigProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
