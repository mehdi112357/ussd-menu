/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { HiOutlineMenuAlt3} from "react-icons/hi";
import {AiOutlineBell} from "react-icons/ai";
import * as style from './HeaderStyle';
import StaticTexts from "../../Constants/En/StaticTexts";
import { Drawer, Row, Col, Button } from 'antd';
import {AiOutlineArrowRight, AiOutlineMail, AiOutlinePoweroff} from 'react-icons/ai';


const DashboardHeader = () => {

    const [drawer, setDrawer] = useState(false);

    return (
        <div css={style.headerMainFrame}>
            <div className='myContainer'>
                <div css={style.dashboardHeaderStyle}>
                    <div className='inRowFlexItems'>
                        <Row>
                            <Col xl={24} lg={24} md={24} sm={0} xs={0}>
                                <h5 className={style.dashboardSideSignature}>
                                    {StaticTexts.dashboardMainTitle}</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={0} lg={0} md={0} sm={24} xs={24}>
                                <button
                                    css={style.hamburgerMenuIcon}
                                    onClick={()=>setDrawer(true)}>
                                    <HiOutlineMenuAlt3/>
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <div css={style.dashboardHeaderLeftSide}>
                        <Button shape="circle" icon={<AiOutlineBell />} />
                        <Button shape="circle" icon={<AiOutlineMail />} />
                        <Button shape="circle" icon={<AiOutlinePoweroff />} />
                    </div>
                </div>
            </div>
            <Drawer placement="right" onClose={()=>setDrawer(false)} visible={drawer}>
                <div css={style.drawerFrame}>
                    <Button css={style.closeDrawerButton}
                    onClick={()=>setDrawer(false)}>
                        <AiOutlineArrowRight css={style.closeDrawerIcon} />
                    </Button>
                </div>
            </Drawer>
        </div>
    )
}

export default DashboardHeader;
