import { useState } from 'react';
import {FiSearch, FiX} from "react-icons/fi";

import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import SearchResultFrame from "../SearchResult/SearchResultFrame";

const simpleInputStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 350px;
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
  font-size: 14px;
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


const SearchInput = () => {

    const [ tfsName, setTfsName ] = useState('');
    const handleChangeInput = (e) => {
        setTfsName(e.target.value)
    }
    return(
        <div css={simpleInputStyle}>
            <FiSearch css={searchInputIcon} />
            <input type='text' css={searchInputStyle} placeholder='Search ETFs...'
                onChange={(e) => handleChangeInput(e)}
                value={tfsName}
            />
            {
                tfsName.length > 3 ?
                    <FiX css={deleteSearchInputIcon}
                         onClick={() => setTfsName('')} />:
                    null
            }
            {
                tfsName.length > 3?
                    <SearchResultFrame keyword={tfsName} />:
                    null
            }
        </div>
    )
}

export default SearchInput;
