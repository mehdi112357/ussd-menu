
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import SearchResultItem from "./SearchResultItem";
import {useEffect, useState} from "react";
import {BeatLoader} from "react-spinners";

const searchResultFrame = css `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 38px;
  width: 100%;
  min-height: 100px;
  max-height: 300px;
  border-radius: 15px;
  border: 1px solid ${colors.lightSilver};
  background-color: #fff;
  z-index: 99;
  padding: 10px;
  overflow-y: auto;`

const SearchResultFrame = (props) => {
    // const { keyword } = props;

    const [ result, setResult ] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setResult([
                {
                    id: 0,
                    title: 'eblu',
                    subTitle: 'investo S&P global eater index ETF'
                },
                {
                    id: 1,
                    title: 'pho',
                    subTitle: 'investo water resources ETF'
                },
                {
                    id: 2,
                    title: 'fiw',
                    subTitle: 'first trust water ETF'
                },
            ])
        }, 2000);
    }, []);
    return(
        <div css={searchResultFrame}>
            {
                result.length === 0?
                <BeatLoader color={colors.grayMaterial} size={9} />:
                result.map((item, index) =>
                    <SearchResultItem title={item.title} subTitle={item.subTitle} key={index} />
                )
            }
        </div>
    )
}

export default SearchResultFrame;
