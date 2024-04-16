/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useState} from 'react';
import * as colors from "../../../Constants/Colors/Colors";
import StaticTexts from "../../../Constants/En/StaticTexts";
import {List} from "antd";


const mainFrame = css`
  display: flex;
  flex-direction: column;
  align-items: normal;
`
const searchResultItem = (isActive) => css`
  cursor: pointer;
  padding: 20px;
  border: 1px solid ${colors.light2OnBlack};
  font-weight: normal;
  border-left: ${isActive? '5px': '1px'} solid ${isActive?
          colors.greenMaterial: colors.light2OnBlack};
  background-color: ${isActive? colors.state100: '#fff'};
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  border-radius: 5px;
  border-top-left-radius: ${isActive? 0: '5px'};
  border-bottom-left-radius: ${isActive? 0: '5px'};
  color: ${colors.titleColorOnWhite};
  direction: ltr;
  transition-duration: 0.3s;
`

const SearchResult = ({ data, onItemSelect }) => {

    const [selectedId, setSelectedId] = useState(null);
    return(
        <div css={mainFrame}>
            <List
                locale={{emptyText: StaticTexts.common.noDataToShow}}
                dataSource={data}
                renderItem={(item, index) => (
                    <li
                        css={searchResultItem(selectedId === item.menuId)}
                        key={index}
                        onClick={() => {
                            onItemSelect(item.menuId);
                            setSelectedId(item.menuId);
                        }}>
                        {item.fullPath}
                    </li>
                )}
                pagination={{
                    pageSize: 5,
                    align: 'center'
                }}
            />
        </div>
    )
}
export default SearchResult;
