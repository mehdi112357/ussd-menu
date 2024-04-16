
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';

const simpleInputStyle = css`
  position: relative;
  margin: 15px 0 !important;
  display: flex;
  flex-direction: column`

const inputStyle = (error) => css`
    width: 100%;
    border: none;
    outline: none;
    padding: 5px 0;
    font-size: 15px;
    font-weight: 900;
    color: ${error? colors.redMaterial: colors.inputTextColor};
    border-bottom: 2px solid ${error? colors.redMaterial: colors.inputBorderBottom};
    transition-duration: 0.2s;
    &:hover{
      border-bottom: 2px solid ${colors.hoverInputBorderBottom} !important;
    }
    &:focus{
      border-bottom: 2px solid ${colors.focusedInputBorderBottom} !important;;
    }
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: ${colors.inputPlaceholder};
      font-size: 15px;
      font-weight: 100;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      color: ${colors.inputPlaceholder};
      font-size: 15px;
      font-weight: 100;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: ${colors.inputPlaceholder};
      font-size: 15px;
      font-weight: 100;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: ${colors.inputPlaceholder};
      font-size: 15px;
      font-weight: 100;
`
const errorText = css `
  position: absolute;
  color: ${colors.redMaterial};
  font-size: 11px;
  font-weight: 900;
  top: 32px;`


const TextInputWithLabel = ({ label, type, autoFocus, onChange, error}) => {
    return(
        <div css={simpleInputStyle}>
            <input placeholder={label} type={type} autoFocus={autoFocus}
                   onChange={onChange} css={inputStyle(error)}
            />
            {
                error !== ''? <span css={errorText}>{error}</span>: null
            }
        </div>
    )
}

export default TextInputWithLabel;

