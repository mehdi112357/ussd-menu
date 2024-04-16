
// import React from 'react';
// import { css, jsx } from '@emotion/react';
// import * as colors from '../../Constants/Colors/Colors';
// import StaticTexts from "../../Constants/En/StaticTexts";
// import Logo from '../../Assets/images/mainLogo.png';
// import {HiOutlineMenuAlt3} from "react-icons/hi";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import {AiOutlineArrowRight} from "react-icons/ai";
// import {useState} from "react";
// import WebsiteMenu from "../Menu/WebsiteMenu/WebsiteMenu";
// import AuthenticationButtons from "./AuthenticationButtons/AuthenticationButtons";


// const headerMobileFrame = css `
//   min-height: 70px;
//   padding: 0 10px;
//   width: 100%;
//   background-color: #fff;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   border-bottom: 1px solid darken(${colors.lightSilver}, 5);
//   margin-bottom: 30px;`

// const hamburgerMenuIcon = css`
//   color: ${colors.darkSilver};
//   font-size: 38px;
//   background-color: transparent;
//   border: none;
//   outline: none;
//   top: 5px;
//   position: relative;
//   svg{
//     font-size: 28px;
//   }
// `
// const drawerFrame = css`
//   padding: 15px;`
// const closeDrawerButton = css`
//   position: absolute;
//   bottom: 30px;
//   left: 20px;
//   background-color: #78909C;
//   border-radius: 100px; 
//   min-width: 45px; 
//   min-height: 45px`
// const closeDrawerIcon = css `
//   color: #fff;
//   font-size: 25px`


// const WebsiteMobileHeader = () => {

//     const [drawer, setDrawer] = useState(false);

//     return (
//         <>
//             <header css={headerMobileFrame}>
//                 <img src={Logo} alt={StaticTexts.projectName}/>
//                 <button
//                     css={hamburgerMenuIcon}
//                     onClick={()=>setDrawer(true)}>
//                     <HiOutlineMenuAlt3 />
//                 </button>
//             </header>
//             <Drawer anchor="right" open={drawer} onClose={()=>setDrawer(false)} >
//                 <div css={drawerFrame}>
//                     <Button css={closeDrawerButton}
//                             onClick={()=>setDrawer(false)}>
//                         <AiOutlineArrowRight css={closeDrawerIcon} />
//                     </Button>
//                     <AuthenticationButtons />
//                     <WebsiteMenu />
//                 </div>
//             </Drawer>
//         </>
//     )
// }

// export default WebsiteMobileHeader;
