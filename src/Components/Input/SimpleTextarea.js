
 import { css, jsx } from '@emotion/react';
 import { Input } from 'antd';

 const { TextArea } = Input;


 const formFrame = (width) => css `
    width: ${width};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media(max-width: 768px){
        width: 100% !important;
    }

 `

const labelStyle = css `
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -1px
`
const textareaStyle =  css `
    width: 100%;
    //direction: rtl;
    font-size: 15px
`




 const SimpleTextarea = (props) => {

    const { label, onChange, width='200px' } = props;

    return(
        <div css={formFrame(width)}>
            <label css={labelStyle} htmlFor='simpleTextareaLabel'>{label}</label>
            <TextArea showCount maxLength={100} rows={8} css={textareaStyle} id='#simpleTextareaLabel' />
        </div>
    )
 }

 export default SimpleTextarea;