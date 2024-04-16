
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import {IoIosArrowForward} from "react-icons/io";
import {Link} from "react-router-dom";



const searchResultItem = css `
  width: 94%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 2px;
  transition-duration: 0.2s;
  border-radius: 7px;
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  svg{
    transition-duration: 0.2s;
    color: transparent;
  }
  &:hover{
    background-color: ${colors.state200};
    svg{
      color: ${colors.titleColorOnWhite};
    }
  }
  
`
const searchResultItemDetails = css `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h3{
    color: ${colors.infoColor};
    text-transform: uppercase;
    font-size: 15px;
    margin-bottom: 3px;
  }
  h6{
    color: ${colors.titleColorOnWhite};
    font-size: 14px;
  }
`

const SearchResultItem = (props) => {
    const { title, subTitle } = props;
    return(
        <Link to='/searchEtfResult' css={searchResultItem}>
            <div css={searchResultItemDetails}>
                sdvsdv
            </div>
            <IoIosArrowForward />
        </Link>
    )
}

export default SearchResultItem;
