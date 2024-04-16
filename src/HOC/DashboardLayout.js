/** @jsxImportSource @emotion/react */
import React  from 'react';
import {Outlet} from 'react-router-dom';
import DashboardHeader from "../Containers/Header/DashboardHeader";
import * as dashboardStyle from './DashboardLayout_style';
import {Col, Row} from "antd";
import DashboardSideMenu from "../Containers/DashboardSideMenu/DashboardSideMenu";

const DashboardLayout = ({component: Component}) => {
    return (
        <div className='myContainer'>
            <Row className={dashboardStyle.dashboardContentFrame}>
                <Col xl={4} lg={6} md={0} sm={0} xs={0}>
                    <DashboardSideMenu />
                </Col>
                <Col xl={20} lg={18} md={24} sm={24} xs={24}>
                    <div className={dashboardStyle.dashContentFrame}>
                        <DashboardHeader />
                        <Outlet />
                    </div>
                </Col>

            </Row>
        </div>
    )
};
export default DashboardLayout;
