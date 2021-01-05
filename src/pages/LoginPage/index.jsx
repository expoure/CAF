import { useRef } from 'react'
import { Button } from '../../components/atomos/Button'
import { Input } from '../../components/atomos/Input'
import { logoCaf, mailIcon, lockIcon } from '../../common/images'
import { Form } from '@unform/web'
import { useAuth } from '../../contexts/auth.context'
import { routesTypes } from '../../resources/routesTypes'
import { useMessage } from '../../contexts/message.context'
import { useTranslation } from "react-i18next"

import {
  Container,
  ImageContainer,
  Content,
  CAFLogo,
  BrandView,
  Line,
  LoginTitle,
  LoginText,
  DivInputs,
  CommercialHeader,
  CommercialBody,
  ContainerCommercialText,
  CustomizedLoginButton
} from './styles'


const LoginPage = ({ ...props }) => {
  const { t } = useTranslation();
  const { history } = props
  const formRef = useRef(null)
  const { onLogin } = useAuth()
  const { onSignal, onMessageFailed } = useMessage()
  const onSubmit = obj => {
    onSignal()
    onLogin(obj)
      .then(() => {
        history.push(routesTypes.HOME)
      })
      .catch(error => {
        onMessageFailed(t('login.error'))
      })
  }
  return (
    <Container>
      <Content>
          <div
            style={{
              display: 'flex',
              width: '100%',
              marginBottom: '12%'
            }}
          >
            <BrandView>
            <Form useRef={formRef} onSubmit={obj => onSubmit(obj)}>
              <CAFLogo src={logoCaf}/>
              <Line/>
              <LoginTitle>{t('login.title')}</LoginTitle>
              <LoginText>{t('login.sub_title')}</LoginText>
              <DivInputs>
                <Input placeholder={t('login.email_placeholder')} icon={mailIcon} name="email" type="text"/>
                <Input placeholder={t('login.password_placeholder')} icon={lockIcon} name="password" type="password"/>
              </DivInputs>
              <Button fullWidth>{t('login.acess_button')}</Button>
              </Form>
            </BrandView>
          </div>
      </Content>
      <ImageContainer>
        <ContainerCommercialText>
          <CommercialHeader>{t('login.commercial_text_header')}</CommercialHeader>
          <CommercialBody>{t('login.commercial_text_body')}</CommercialBody>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <CustomizedLoginButton
              onClick={()=> window.open("blablabla", "_blank")}
              transparent>{t('login.about')}
            </CustomizedLoginButton>
          </div>
        </ContainerCommercialText>
      </ImageContainer>
    </Container>
    
  )
}

export { LoginPage }
