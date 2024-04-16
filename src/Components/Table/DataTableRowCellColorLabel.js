
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import { Row, Col } from 'antd';



const itemStyle = (width, align) => css`
  width: ${width};
  margin: 5px 0;
  font-size: 14px;
  color: ${colors.infoColor} !important;
  font-weight: 900;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: ${align === 'left'? 'flex-start': align === 'center'? 'center': 'flex-end'};
  align-items: center;
  color: ${colors.titleColorOnWhite};
  @media (max-width: 768px) {
      width: 100% !important;
      text-align: center;
    margin: 10px 0;
    justify-content: center !important;
    }`

const details = css `
  display: flex;
  align-items: center;
`
const iconFrame = css `
  svg{
    color: ${colors.grayMaterial};
    font-size: 20px;
    position: relative;
    top: 1px;
  }
`


const DataTableRowCellColorLabel = ({width, title, mainTitle, icon, align}) => {
    return(
        <div css={itemStyle(width, align)}>
            <Row>
              <Col xl={24} lg={24} md={0} sm={0} xs={0}>
                <div css={details}>
                    <div css={iconFrame}>
                        {icon}
                    </div>
                    <h4>{mainTitle}: </h4>
                </div>
              </Col>
            </Row>
            {title}
        </div>
    )
}

export default DataTableRowCellColorLabel;
