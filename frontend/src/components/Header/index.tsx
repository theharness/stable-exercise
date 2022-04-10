import React from 'react'
import { Navbar, NavbarBrand} from 'reactstrap'
import styled from 'styled-components'

import stableLogo from '../../assets/stable-logo.svg'

const Header = () => {

  return (
    <Container>
      <Navbar>
        <NavbarBrand href='https://usestable.com'>
          <Logo src={stableLogo} alt={'Stable logo'}/>
        </NavbarBrand>
      </Navbar>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  border-bottom: 1px solid #E5E5E5
`

const Logo = styled.img`
  width: 180px;
  margin-top: 15px;
  margin-left: 20px;
`

export default Header;
