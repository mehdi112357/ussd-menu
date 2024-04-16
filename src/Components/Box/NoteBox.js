
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';

const noteFrame = (maxWidth) => css`
  background-color: ${colors.state200};
  border-radius: 25px;
  color: ${colors.middleSilver};
  width: ${maxWidth}px;
  margin: 15px;
  padding: 15px;
  font-weight: 900;
  font-size: 13px;
  line-height: 18px;
  @media (max-width: 768px){
    width: 100%;
  }
`



const NoteBox = ({message, maxWidth}) => {
    return(
        <div css={noteFrame(maxWidth)}>
            {message}
        </div>
    )
}

export default NoteBox;