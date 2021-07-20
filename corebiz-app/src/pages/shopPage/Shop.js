import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import '../../themes/master.css'
import axios from 'axios'
import InsertEmail from '../homepage/InsertEmail';
import corebiz from '../../assets/img/corebiz.png'
import vtex from '../../assets/img/vtex.png'
import { ImgCorebiz, BoxInfosProduct, ButtonWhite, ArrowShop, IconContact, IconsHeader, InputHeader, ImgBanner, Footer } from '../../themes/ThemeShop/Theme-Shopping'


function Shop() {
    
    const [product, setProduct] = useState([])
    const [name_id, setName_id] = useState('noVisibility')
    const [car, setCar] = useState(0)
    const [valueInput, setValueInput] = useState('')
    const [filter, setFilter] = useState(false)
    
    
    useEffect(() => {
    getProduct()
        
    }, []); 

   
    const getProduct = () => {
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
            .then((res) => {
                setProduct(res.data)

            }).catch((e) => {
                console.log(e)
            })
    }

    const mouseOver = (e) => {

        if (e.type === 'mouseover') {
            setName_id('visibility_Button')
        }
    }

    const addCar = () => {
        setCar(car + 1)
    }


    const handleInput = (e) => {
        setValueInput(e.target.value)

    }

    const filterProduct = product.filter(product => product.productName === valueInput.toUpperCase())


    const mapProduct = product.map((product) => {

        const loadingPrice = product.installments[0] && product.installments[0].quantity

        const loadingDivision = product.installments[0] && product.installments[0].value

        return (
            <Box paddingRight='99px' id='buy' key={product.productId} component = 'figure'>
                <img id='productImage' onClick={addCar} src={product.imageUrl}></img>
                <BoxInfosProduct >
                    <p>{product.productName}</p>
                    <p>{product.stars}</p>
                    <p>Por {product.price}</p>
                    <p>{product.installments[0] ? <p>ou em {loadingPrice}x de {loadingDivision}</p> : <p></p>}</p>

                    <p id={name_id}>Clique no produto para comprar</p>

                </BoxInfosProduct>
            </Box>
        )
    })

    const mapFilter = filterProduct.map((product) => {

        const loadingPrice = product.installments[0] && product.installments[0].quantity

        const loadingDivision = product.installments[0] && product.installments[0].value

        return (
            <Box paddingRight='99px' id='buy' key={product.productId} component = 'figure'>
                <img id='productImage' onClick={addCar} src={product.imageUrl}></img>
                <BoxInfosProduct >
                    <p>{product.productName}</p>
                    <p>{product.stars}</p>
                    <p>Por {product.price}</p>
                    <p>{product.installments[0] ? <p>ou em {loadingPrice}x de {loadingDivision}</p> : <p></p>}</p>

                    <p id={name_id}>Clique no produto para comprar</p>

                </BoxInfosProduct>
            </Box>
        )
    })


    const renderImg = () => {
        if (filter === false || valueInput === '') {
            return mapProduct
        } else if (!filterProduct) {
            return mapProduct
        } else {
            return mapFilter
        }
    }

    const enterFilter = (e) => {
        if (e.key === 'Enter') {
            if (!valueInput) {
                alert('Digite na Busca')
            }
        } else {
            setFilter(true)
        }

    }
    

    return (
        <div>
            <header>
                <Box display='flex' justifyContent='space-evenly' alignItems='center' paddingTop='16px' component = 'nav'>
                    <ImgCorebiz src='https://www.corebiz.ag/wp-content/uploads/2020/06/logo-Institucional.png'></ImgCorebiz>
                    <InputHeader
                        placeholder='O que está procurando?'
                        type='text'
                        onChange={handleInput}
                        value={valueInput}
                        onKeyUp={enterFilter}
                    ></InputHeader>
                    <Box display='flex' alignItems='center'>
                        <IconsHeader src='https://cdn4.iconfinder.com/data/icons/36-slim-icons/87/contact2.png'></IconsHeader>
                        <p>Minha Conta</p>
                    </Box>
                    <Box display='flex'>
                        <IconsHeader src='https://cdn0.iconfinder.com/data/icons/business-collection-2027/60/cart-9-256.png'></IconsHeader>
                        <Box bgcolor='#F8475F' color='white'
                            height='20px' marginLeft='5px' width='20px' borderRadius='100%' display='flex' justifyContent='center'>
                           {car}
                        </Box>
                    </Box>
                </Box>
            </header>
            <Box display='flex' component = 'section'>
                <div id='divOndulada'>
                    <Box display='flex' flexDirection='column' alignItems='center' paddingTop='60px'>
                        <p id='p_medium'>Olá, o que você está buscando?</p>
                        <p id='p_larger'>Criar ou migrar seu
                            <br />
                            e-commerce?</p>
                    </Box>

                </div>
                <Box>
                    <ImgBanner src='https://s3-alpha-sig.figma.com/img/bc7c/1c07/f42e64ce5d7916e3520abd00d77ff65b?Expires=1627257600&Signature=Qrm-mCvgskyEt00mWS7kNzXTRL3mqllc6FjoLAVg6PFfiSy1fAPTS5kBAltuRUF0p~WOC0zZ9uM29FrIESDMvHqwaVnKHP2lhrQkutFaP3-q5QxVXNbcPXNMuX9g-mwIq39tjL~AEiA4gQZ9BN35EmKF8tc1IkDuUshS05fXsnB2NycMfLPYeTCD7zDQ1BkuUPNgPq3HqOw4z0j25-~OD4skYkDCzokBf8nMqilN7KRFM5KrXSJozNbg2QMc-Xa0Pp8wuv8HdOejvciHyl0DhR09bHfEgJakltjPTpiCaP8ws4Pa12EjRYC-W91pcCgfaN-kOkb~UjjjVh5MhLmsiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></ImgBanner>
                </Box>
            </Box>

            <Box marginLeft='200px' marginTop='8px' display='flex' flexDirection='column' component = 'artigo'>
                <p id='p_small'>Mais Vendidos</p>
                <Box display='flex' justifyContent='space-evenly' alignItems='center'>
                    <ArrowShop src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_left_48px-256.png'></ArrowShop>
                    <Box display='flex' onMouseOver={mouseOver}>

                        {renderImg()}
                    </Box>


                    <ArrowShop src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_right_48px-512.png'></ArrowShop>
                </Box>


            </Box>
            <Box marginTop='-250px' position='relative' component>
                <Box position='relative'>
                    <InsertEmail />
                </Box>

                <Footer>
                    <Box lineHeight='35px'>
                        <h1>Localização</h1>
                        <hr />
                        <p>
                            Avenida Andrômeda, 2000. Bloco 6 e 8
                            <br />
                            Alphavile SP
                            <br />
                            brasil@corebiz.ag
                            <br />
                            +55 11 3090 1039
                        </p>
                    </Box>

                    <Box display='flex' flexDirection='column'>
                        <ButtonWhite>
                            <IconContact src='https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-256.png' />
                            ENTRE EM CONTATO
                        </ButtonWhite>

                        <ButtonWhite>
                            <IconContact src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_headset_mic_48px-128.png' />
                            FALE COM O NOSSO <br /> CONSULTOR ONLINE
                        </ButtonWhite>
                    </Box>
                    <Box display='flex' justifyContent='space-around' width='250px' fontSize='10px'>
                        <Box display='flex' flexDirection='column'>
                            Created by
                            <img src={corebiz}></img>
                        </Box>
                        <Box display='flex' flexDirection='column'>
                            Powered by
                            <img src={vtex}></img>
                        </Box>
                    </Box>
                </Footer>

            </Box>


        </div>
    );
}
export default Shop