import React from 'react';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { Icon } from '@material-ui/core';

const IconsHeader = styled.img `
height: 50px;
`
const ImgCorebiz = styled.img `
width: 140px;
height: 51px;
`

function Header() {
return(
    <header>
        <Box display = 'flex' justifyContent = 'space-evenly' alignItems = 'center'>
            <ImgCorebiz src ='https://www.corebiz.ag/wp-content/uploads/2020/06/logo-Institucional.png'></ImgCorebiz>
            <input></input>
            <Box display = 'flex' alignItems = 'center'>
                <IconsHeader src = 'https://cdn4.iconfinder.com/data/icons/36-slim-icons/87/contact2.png'></IconsHeader>
                <p>Minha Conta</p>
            </Box>
            <Box display = 'flex'>
                <IconsHeader src = 'https://cdn0.iconfinder.com/data/icons/business-collection-2027/60/cart-9-256.png'></IconsHeader>
                <Box bgcolor = '#F8475F' color = 'white'
                height = '20px' marginLeft = '5px' width = '20px' borderRadius = '100%' display = 'flex' justifyContent = 'center'>
                1</Box>
            </Box>
        </Box>
    </header>
);   
}
export default Header