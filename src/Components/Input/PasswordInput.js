/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React  from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';

const inputStyle = (width) => css `
  width: ${width}px;
  margin: 0 5px;
`

const PasswordInput = (props) => {

    const { width=250, label } = props;
    return(
        <Input.Password
            size='large'
            css={inputStyle(width)}
            placeholder={label}
            iconRender={(visible) =>
                (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
    )
}
export default PasswordInput;