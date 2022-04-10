import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Mailbox from './components/Mailbox'

const App = () => {

  return (
    <Container>
      <Header />
      <MailContainer>
        <Mailbox />
      </MailContainer>
    </Container>
  );
}

const Container = styled.div`
`

const MailContainer = styled.div`
  max-width: 1080px;
  margin-top: 29px;
  margin-left: auto;
  margin-right: auto;
`

export default App;
