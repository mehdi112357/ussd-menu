/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useState} from 'react';
import * as dashboardStyle from "../../HOC/DashboardLayout_style";
import SectionTitle from "../../Containers/Title/SectionTitle";
import StaticTexts from "../../Constants/En/StaticTexts";
import FullLoading from "../../Components/Loading/FullLoading";
import TreeDiagramSection from "./components/TreeDiagramSection";
import {useLocation, useNavigate} from "react-router-dom";


const contentBoxStyle = css `
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;
`

const Index = () => {

    const [loading, setLoading] = useState(false);

    const { state } = useLocation();
    const navigation  = useNavigate();

    return (
        <div css={dashboardStyle.dashContentFrame}>
            <SectionTitle title={StaticTexts.dashboardGraphSideMenu}/>
            <div css={contentBoxStyle}>
                {
                    loading?
                        <FullLoading />:
                        <TreeDiagramSection
                            navigation={navigation}
                            defaultId={state?.item? state: undefined} />
                }
            </div>
        </div>
    )
}

export default Index;