/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React  from 'react';
import * as dashboardStyle from "../../HOC/DashboardLayout_style";
import SectionTitle from "../../Containers/Title/SectionTitle";
import CircularPieChart from "../../Components/Charts/CircularPieChart";
import LinearComparisonChart from "../../Components/Diagrams/LinearComparisonChart";

const boxContentFrame = css `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 768px){
    flex-direction: column-reverse;
  }
`
const pieFrame = css `
  width: 40%;
  @media(max-width: 768px){
    width: 100%;
  }
`
const diagramFrame = css `
  width: 50%;
  @media(max-width: 768px){
    width: 100%;
  }
`

const linearData = [
    {
        name: 'همراه اول',
        color: '#54c5d0',
        data: [91149, 93555, 94555, 92952, 94440, 94220, 93526, 98225, 81654,
            94551, 95746, 54414]},
    {
        name: 'ایرانسل',
        color: '#f7c600',
        data: [73556, 78438, 78555, 73354, 70650, 74565, 70580, 70463,71242, 73875,
            70636, 72343]},
    {
        name: 'رایتل',
        color: '#942a68',
        data: [9859, 9838, 9943, 9154, 9760, 9873, 9990, 9946, 9214, 9502, 9993,
            9122]},
    {
        name: 'سایر',
        color: '#00c946',
        data: [424, 332, 345, 397, 586, 755, 574, 604, 476, 391, 468, 511]
    }
]

const Index = () => {
    return (
        <div css={dashboardStyle.dashContentFrame}>
            <SectionTitle title='Home' />
            <div css={boxContentFrame}>
                <div css={pieFrame}>
                    <CircularPieChart />
                </div>
                <div css={diagramFrame}>
                    <LinearComparisonChart data={linearData} />
                </div>
            </div>
        </div>
    )
}

export default Index;