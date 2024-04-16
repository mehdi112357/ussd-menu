// import React, { useState } from 'react';
// import StaticText from '../../Constants/En/StaticTexts';
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import { IoIosMenu } from 'react-icons/io';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
// import SearchInput from '../../Components/Input/SearchInput';


// import { css, jsx } from '@emotion/react';
// import * as colors from '../../Constants/Colors/Colors';




// const DashboardMobileHeader = () => {

//     const [drawer, setDrawer] = useState(false);
//     return(
//         <>
//             <header css={headerMobileFrame}>
//                 <h2>{StaticText.projectName}</h2>
//                 <button
//                     css={hamburgerMenuIcon}
//                     onClick={()=>setDrawer(true)}>
//                     <IoIosMenu/>
//                 </button>
//             </header>
//             <Drawer anchor="right" open={drawer} onClose={()=>setDrawer(false)}>
//                 <div css={drawerFrame}>
//                     <Button css={closeDrawerButton}
//                     onClick={()=>setDrawer(false)}>
//                         <AiOutlineArrowRight css={closeDrawerIcon} />
//                     </Button>
//                     <SearchInput />
//                 </div>
//             </Drawer>
//         </>
//     )
// }

// export default DashboardMobileHeader;