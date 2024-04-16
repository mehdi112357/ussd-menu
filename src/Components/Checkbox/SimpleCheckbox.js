/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';import {Checkbox} from "antd";
import React from "react";

const checkboxStyle = css`
  direction: ltr !important;
  padding-right: 15px;
`

const SimpleCheckbox = ({ title, onChange, defaultValue }) => {

    return(
        <Checkbox
            defaultChecked={defaultValue}
            css={checkboxStyle}
            onChange={onChange}>
            {title}
        </Checkbox>
    )
}

export default SimpleCheckbox;
