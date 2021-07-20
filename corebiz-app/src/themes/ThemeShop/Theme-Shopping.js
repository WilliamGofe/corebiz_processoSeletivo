import styled from "styled-components"
import { IconArrow } from "../themeInsertEmail/Theme-InserEmail"

export const IconsHeader = styled.img `
height: 38px;
`
export const ImgCorebiz = styled.img `
width: 140px;
height: 51px;
`
export const InputHeader = styled.input `
width: 718px;
border-top: none;
border-left: none;
border-right: none;
margin-top: 15px;
padding:8px;
outline: none;
::-webkit-input-placeholder{
font-size: 16px;
}
`
export const ImgBanner = styled.img`
height: 430px;
width: 940px;
`
export const ArrowShop = styled(IconArrow)`
animation: none;
margin-left: -125px;
`
export const IconContact = styled.img `
height: 20px;
`
export const BoxInfosProduct = styled.div `
display: flex;
flex-direction: column;
line-height: 8px;
cursor: pointer;
align-items: center;

`
export const Footer = styled.footer`
background-color: black;
color: white;
height: 232px;
position:relative;
margin-top:-200px;
display:flex;
justify-content: space-around;
align-items: center;
bottom:0;
`

export const ButtonWhite = styled.button`
display:flex;
height: 38px;
width: 195px;
justify-content: space-around;
align-items: center;
padding:10px;
margin-bottom: 25px;
border-radius: 5px;
border:none;
cursor:pointer;
:hover{
    background-color: #E6E8EA;
-moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

`

