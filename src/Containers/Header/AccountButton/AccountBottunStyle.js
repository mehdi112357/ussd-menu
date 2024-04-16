
 import * as colors from '../../../Constants/Colors/Colors';
 import { css, jsx } from '@emotion/react';


export const AccountButtonFrame = css `
position: relative;
display: flex;
flex-direction: row;
cursor: pointer;
padding-top: 7px;
align-items: center;`

export const accountButtonAvatar = css `
width: 40px;
height: 40px;
border-radius: 100px;
margin-right: 10px;
@media (max-width: 768px) {
  margin: 0;
}`

export const accountButtonDetails = css`
@media (max-width: 768px) {
  display: none;
}
& > div{
  display: flex;
  flex-direction: row;
}
.arrowIconStyle{
  margin: 0 5px;
}
h6{
  font-size: 11px;
  font-weight: 600;
  color: lighten(${colors.middleSilver}, 15);
}`

export const arrowIconStyle = css `
font-size: 18px;
color: ${colors.light2OnBlack};
margin: 0 5px;`
export const accountCollapseFrame = css`
position: absolute;
top: 56px;
width: 120px;
left: 0;
z-index: 1009;
background-color: #fff;
border: 1px solid ${colors.lightSilver};
border-radius: 5px;
padding: 13px 10px 10px;`

export const accountCollapseMenuItem = css`
display: flex;
flex-direction: row;
align-items: center;
font-size: 13px;
font-weight: 600;
cursor: pointer;
justify-content: flex-end;
color: ${colors.textColorOnWhite};
margin-bottom: 10px;`

export const accountCollapseIcon = css `
color: ${colors.lightSilverIconColor};
position: relative;
top: 0;
font-size: 20px;
margin-left: 5px;`
export const reminderStyleButton = css `
color: ${colors.light2OnBlack};
margin: 0 15px !important;`
export const accountIcon = css `
color: ${colors.lightSilver};
font-size: 25px;
`
export const accountFrame = css `
display: flex;
flex-direction: row;
`