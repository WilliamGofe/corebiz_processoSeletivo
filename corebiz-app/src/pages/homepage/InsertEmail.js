import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import '../../themes/master.css'
import { useHistory } from 'react-router';
import { ButtonBlack, ButtonLargerBlack, Div_insertEmail, HeaderInput, IconArrow, Paragraph_sendEmail } from '../../themes/themeInsertEmail/Theme-InserEmail';


function InsertEmail() {
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputNameValue, setInputNameValue] = useState('')
  const [className_p, setClassName_p] = useState('hidden')
  const [className_input, setClassName_input] = useState('input_insertEmail')
  const [sendEmail, setSendEmail] = useState(false)

  const history = useHistory()

  const handleInputName = (e) => {
    setInputNameValue(e.target.value)
    console.log(inputNameValue)
  }

  const handleInputEmail = (e) => {
    setInputEmailValue(e.target.value)
    console.log(inputEmailValue)
  }



  const go_sendEmail = () => {
    if (!inputNameValue || !inputEmailValue) {
      setClassName_p('notHidden')
      setClassName_input('input_incorrect')
    }
    else {
      setSendEmail(true)
    }
  }

  const goTo_ShoppingPage = () => {
    history.push('/shopping')
  }

  const back_sendEmail = () => {
    setInputEmailValue('')
    setInputNameValue('')
    setSendEmail(false)

  }



  const render = () => {
    if (sendEmail === false) {
      return (
        <main>
          <HeaderInput>Participe de nossas news com promoções e novidades!</HeaderInput>
          <form>
            <Box display='flex' flexDirection='column'>
              <input className={className_input}
                placeholder='Digite seu nome'
                value={inputNameValue}
                onChange={handleInputName}
                type='name'

              >
              </input>
              <p className={className_p}>Preencha com seu nome completo</p>
            </Box>

            <Box>
              <input className={className_input}
                placeholder='Digite seu email'
                value={inputEmailValue}
                onChange={handleInputEmail}
                type='email'

              ></input>
              <p className={className_p}>Preencha com um e-mail válido</p>

            </Box>


            <ButtonBlack onClick={go_sendEmail}

            >Eu quero!</ButtonBlack>
          </form>
        </main>
      )
    } else {
      return (

        <Box display='flex' alignItems='center' component = 'main'>

          <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' component = 'header'>
            <HeaderInput>Seu e-mail foi cadastrado com sucesso!</HeaderInput>
            <Paragraph_sendEmail>A partir de agora você receberá as novidade e ofertas exclusivas.</Paragraph_sendEmail>
            <ButtonLargerBlack onClick={back_sendEmail}>Cadastrar novo e-mail</ButtonLargerBlack>
          </Box>



          <Box paddingLeft='1050px' position='fixed' onClick={goTo_ShoppingPage} component = 'section' >
            <IconArrow src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_right_48px-512.png'></IconArrow>
          </Box>

        </Box>

      )
    }
  }

  return (

    <Div_insertEmail>
      <Box bgcolor='#F2F2F2' width='100vw' display='flex' justifyContent='center' alignItems='center' flexDirection='column' height='140px' padding='8px'>


        {render()}

      </Box>
    </Div_insertEmail>


  );
}
export default InsertEmail