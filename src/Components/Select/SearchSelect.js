/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useState} from 'react';
import {Select} from 'antd';
import * as colors from "../../Constants/Colors/Colors";
import InputTooltip from "../Tooltip/InputTooltip";


const formFrame = (width, inRow) => css`
  width: ${width}px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  // margin: ${inRow ? '15px' : 0};
  @media (max-width: 768px) {
    width: 100% !important;
  }
`
const selectStyle = css`
  width: 100%;
  font-size: 12px;
  letter-spacing: -1px;
  //&::placeholder {
  //  font-size: 14px !important;
  //}
`


const SearchSelect = (props) => {
    const [value, setValue] = useState('');
    const {label, onSelect, inRow =true, floatLabel, width = 190, tooltip,
        data, disabled= false, disabledValue=''} = props;

    const handleChange = (value) => {
        setValue(value);
        onSelect(value)
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <div css={formFrame(width, inRow)}>
            {/*{floatLabel !== '' && !disabledValue ?*/}
            {/*    <label css={labelStyle(value)} htmlFor='simpleSelectLabel'>*/}
            {/*        {tooltip? <InputTooltip message={tooltip} />: null}*/}
            {/*        {label}*/}
            {/*    </label> : null}*/}
            <Select
                showSearch
                allowClear={true}
                size={"large"}
                disabled={disabledValue !== ''}
                css={selectStyle}
                defaultValue={disabledValue}
                placeholder={label}
                optionFilterProp="children"
                onChange={handleChange}
                onSearch={() => {}}
                filterOption={filterOption}
                options={data}
            />
        </div>
    )
}

export default SearchSelect;