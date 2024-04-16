/** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import React, {useEffect, useState} from 'react';
import {Spin} from "antd";
import services from "../../../Constants/Services";
import {useDispatch, useSelector} from "react-redux";
import {openNotification} from "../../../App";
import GeneralRequest from "../../../Utils/API/GeneralRequest";
import Space10 from "../../../Components/Spaces/Space10";
import Space20 from "../../../Components/Spaces/Space20";
import * as colors from '../../../Constants/Colors/Colors';
import ShortcodeInput from "../../../Components/Input/ShortcodeInput";
import {setPhoneNumber} from "../../../Redux/Reducer/simulatorSlice";
import Encodr from "encodr";


const responseFrame = css `
  width: 100%;
  height: 100%;
  background-color: #161616b3;
  position: absolute;
  border-radius: 35px;
  z-index: 991;
`
const responseInnerFrame = css `
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const menuListMainFrame = css `
  width: 85%;
  height: auto;
  background-color: #fff;
  border-radius: 17px;
  box-sizing: border-box;
  padding: 15px;
  
`
const menuListFrame = css `
  list-style: none;
  display: flex;
  flex-direction: column;
  white-space: break-spaces;
  //direction: rtl;
  justify-content: flex-end;
  align-items: center;
  li{
    width: 100%;
  }
`

const ResponseResultFrame = ({ data, loading, closeMenu, reCallMenu }) => {

    const [inputValue, setInputValue] = useState(null);

    return (
        <div css={responseFrame}>
            <div css={responseInnerFrame}>
                {
                    loading?
                        <Spin size="large" />:
                        data?
                            <div css={menuListMainFrame}>
                                <ul css={menuListFrame}>
                                    <li>{data}</li>
                                </ul>
                                <Space20 />
                                <ShortcodeInput onChange={(e) => setInputValue(e.target.value)} />
                                <Space10 />
                                <div className='flex justify-between'>
                                    <button onClick={closeMenu}>Cancel</button>
                                    <button onClick={() => reCallMenu(inputValue)}>Next</button>
                                </div>
                            </div>:
                            <div css={menuListMainFrame}>
                                <h5 className='text-gray-700 !font-normal'>
                                    Sorry, something went wrong!
                                </h5>
                                <Space20 />
                                <div className='flex justify-end'>
                                    <button onClick={closeMenu}>Close</button>
                                </div>
                            </div>
                        // menuList && menuList.length > 0?
                        //     <div css={menuListMainFrame}>
                        //         <ul css={menuListFrame}>
                        //             {
                        //                 menuList.map((item, index) =>
                        //                     <li key={index}>
                        //                         {item.command}- {item.text}</li>
                        //                 )
                        //             }
                        //         </ul>
                        //         <Space20 />
                        //         <ShortcodeInput onChange={(e) => setRequestMenu(e.target.value)} />
                        //         <Space10 />
                        //         <div css={actionButtonsReg}>
                        //             <button onClick={callMenu}>بعدی</button>
                        //             <button onClick={closeMenu}>انصراف</button>
                        //         </div>
                        //     </div>:
                        //     <div css={menuListMainFrame}>
                        //         <h5 css={sorryTitle}>متاسفیم، مشکلی پیش آمده است!</h5>
                        //         <Space20 />
                        //         <div css={actionButtonsReg}>
                        //             <button onClick={closeMenu}>بستن</button>
                        //         </div>
                        //     </div>
                }
            </div>
        </div>
    )
}

export default ResponseResultFrame;