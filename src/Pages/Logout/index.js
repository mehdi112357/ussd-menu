import React  from 'react';
import * as dashboardStyle from "../../HOC/DashboardLayout_style";
import SectionTitle from "../../Containers/Title/SectionTitle";


const Index = () => {
    return (
        <div css={dashboardStyle.dashContentFrame}>
            <SectionTitle title='خروج' />
        </div>
    )
}

export default Index;