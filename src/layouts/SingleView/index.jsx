import React from 'react'
import { useAuth } from '../../contexts/auth.context'
import { logoutIcon } from '../../common/images'
import { Container, Header, Content, SingleViewTitle, FlexRow, DivLogout, LinkMenu } from './styles'

function SingleView({ title, icon, contentComponent }) {
  const { onLogout } = useAuth()
  return (
    <Container>
      <Header>
        <FlexRow>
          {icon} 
          <SingleViewTitle>
            <LinkMenu to='/home'> Home</LinkMenu>
            <LinkMenu to='/reports'> Relatórios</LinkMenu>
          </SingleViewTitle>
        </FlexRow>
        <DivLogout onClick={() => onLogout()}>
          <img src={logoutIcon} width="20px" alt=''/>
          Logout
        </DivLogout>
      </Header>
      <Content>{contentComponent}</Content>
    </Container>
  )
}

export { SingleView }