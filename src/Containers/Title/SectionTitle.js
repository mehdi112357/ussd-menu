/** @jsxImportSource @emotion/react */
import React  from 'react';
import * as dashboardStyle from "../../HOC/DashboardLayout_style";
import {RiFocusLine} from "react-icons/ri";


const Index = (props) => {
    const { title, subTitle } = props;
    return (
        <div css={dashboardStyle.dashSectionTitle}>
            <h2><RiFocusLine />{title}</h2>
            <h4>{subTitle}</h4>
        </div>
    )
}

export default Index;