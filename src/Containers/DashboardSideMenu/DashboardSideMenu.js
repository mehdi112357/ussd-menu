/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React from 'react';
import { FiHome} from "react-icons/fi";
import {AiOutlineFileText, AiOutlineMobile} from "react-icons/ai";
import { MdChecklistRtl } from "react-icons/md";
import {BsDiagram2} from "react-icons/bs";
import sendMessage from '../../Assets/images/sendMessage.png';
import StaticTexts from "../../Constants/En/StaticTexts";
import Space20 from "../../Components/Spaces/Space20";
import Space50 from "../../Components/Spaces/Space50";
import EachMenuItem from "./EachMenuItem";
import {AiOutlineSetting} from "react-icons/ai";

const dashboardSideMenuFrame = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 5px;`

const menuFrame = css`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`
const companyLogo = css`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 220px;
  }
`


const DashboardSideMenu = () => {

    return (
        <div css={dashboardSideMenuFrame}>
            <div css={menuFrame}>
                <Space50/>
                <div css={companyLogo}>
                    <img src={sendMessage} loading='lazy' alt='پنل USSD'/>
                </div>
                <Space20/>
                <EachMenuItem icon={<FiHome/>}
                              title={StaticTexts.dashboardHomeSideMenu} link='/home'/>
                <EachMenuItem icon={<AiOutlineMobile/>}
                              title={StaticTexts.dashboardSimulatorSideMenu}
                              link='/simulator'/>
                <EachMenuItem icon={<MdChecklistRtl />}
                              title={StaticTexts.dashboardShortCodeSideMenu}
                              link='/shortcode'/>
                <EachMenuItem icon={<BsDiagram2/>}
                              title={StaticTexts.dashboardGraphSideMenu}
                              link='/graph'/>
                <EachMenuItem icon={<AiOutlineFileText/>}
                              title={StaticTexts.dashboardReportSideMenu}
                              link='/report'/>
                <EachMenuItem icon={<AiOutlineSetting />}
                              title={StaticTexts.dashboardSettingSideMenu} link='/setting'/>
                {/*<EachMenuItem icon={<AiOutlinePoweroff />}*/}
                {/*              title={StaticTexts.dashboardLogoutSideMenu} link='/logout'/>*/}
            </div>

        </div>
    )
}


export default DashboardSideMenu;
