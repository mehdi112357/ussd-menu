
import { css, jsx } from '@emotion/react';
import MenuItem from "./MenuItem";
import {useHistory} from 'react-router-dom';
import MegaMenuItem from "../../MegaMenu/MegaMenuItem";

const websiteMenuStyle = css `
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  align-items: center;
  @media(max-width: 768px){
    flex-direction: column;
    min-width: 250px;
  }
`



const WebsiteMenu = () => {

    const history = useHistory();
    const url = history.location.pathname;

    return(
        <ul css={websiteMenuStyle}>
            <MenuItem title='Home' href='/' isFocused={url === '/'}/>
            <MegaMenuItem title='invest' href='/investment'
                          isFocused={url === '/investment'} />
            <MenuItem title='pricing' href='/pricing' isFocused={url === '/pricing'} />
            <MenuItem title='about' href='/about' isFocused={url === '/about'} />
            <MenuItem title='model' href='/model' isFocused={url === '/model'} />
        </ul>
    )
}

export default WebsiteMenu;
