
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import {FiArrowDownRight, FiArrowUpRight,} from "react-icons/fi";
import { Row, Col } from 'antd';



const itemStyle = (width, align) => css`
  width: ${width};
  margin: 5px 0;
  font-size: 14px;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  justify-content: ${align === 'right'? 'flex-start': align === 'middle'? 'center': 'flex-end'};
  align-items: center;
  color: ${colors.titleColorOnWhite};
  @media (max-width: 768px) {
    width: 100% !important;
    justify-content: center;
  }
  h4{
    font-size: 15px;
    font-weight: 900;
    text-transform: capitalize;
    margin-right: 5px;
    color: ${colors.titleColorOnWhite};
  }
`
const arrowIcon = (type) => css `
  color: ${type === 'up'? colors.greenMaterial: type==='down'? colors.redMaterial:
    colors.grayMaterial};
  font-size: 22px;
  margin-right: 5px;
`
const iconFrame = css `
  svg{
    color: ${colors.grayMaterial};
    font-size: 20px;
    position: relative;
    top: 1px;
  }
`
const details = css `
  display: flex;
  align-items: center;
`




const DataTableRowCellWithArrow = ({width, type, mainTitle, icon, align, value}) => {
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
            {
                type === 'up'?
                    <FiArrowUpRight css={arrowIcon(type)}/>:
                    <FiArrowDownRight css={arrowIcon(type)} />
            }
            {value}
        </div>
    )
}

export default DataTableRowCellWithArrow;
