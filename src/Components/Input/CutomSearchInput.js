import {FiSearch, FiX} from "react-icons/fi";
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';

const simpleInputStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 350px;
  @media (max-width: 768px){
    width: 100%;
  }
`

const searchInputIcon = css`
  position: absolute;
  left: 10px;
  font-size: 18px;
  color: ${colors.middleSilver};`

const searchInputStyle = css`
  width: 100%;
  min-height: 32px;
  border: 1px solid ${colors.lightSilver};
  outline: none;
  padding: 0 35px;
  border-radius: 100px;
  font-size: 16px;
  transition-duration: 0.3s;
  &:hover{
    border: 1px solid darken(${colors.lightSilver}, 8);
  }
  &:focus{
    border: 1px solid ${colors.middleSilver};
  } `

const deleteSearchInputIcon = css `
  position: absolute;
  right: 10px;
  font-size: 16px;
  color: ${colors.middleSilver};
  cursor: pointer;`


const CustomSearchInput = ({word, onChange, clearText, placeholder}) => {

    return(
        <div css={simpleInputStyle}>
            <FiSearch css={searchInputIcon} />
            <input type='text' css={searchInputStyle} placeholder={placeholder}
                   onChange={(e) => onChange(e)}
                   value={word}
            />
            {
                word.length > 3 ?
                    <FiX css={deleteSearchInputIcon}
                         onClick={clearText} />:
                    null
            }
        </div>
    )
}

export default CustomSearchInput;
