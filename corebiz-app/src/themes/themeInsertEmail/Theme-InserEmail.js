import styled from "styled-components"

export const HeaderInput = styled.h3`
font-size: 22px;
font-family: Arial, Helvetica, sans-serif;
color: #333333;
`
export const Div_insertEmail = styled.div `
display: flex;
width: 99.1vw;
justify-content: center;
align-items: center;
height: 100vh;
`
export const Paragraph_sendEmail = styled.p `
margin-top: -15px;
`


export const ButtonBlack = styled.button`
margin: 8px;
height: 48px;
width: 140px;
border-radius: 5px;
background-color: #000000;
color: white;
border:none;
cursor: pointer;
:hover{

-moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
`

export const ButtonLargerBlack = styled.button`
width:328px;
border-radius: 5px;
background-color: #000000;
color: white;
border:none;
cursor: pointer;
height: 48px;
`

export const IconArrow = styled.img `
height: 50px;
cursor: pointer;
animation: go-back 1s infinite alternate;
@keyframes go-back {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
`


