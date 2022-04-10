import React from 'react'
import styled from 'styled-components'

type MailCountProps = {
  count: number
}

const MailCount = ({count}: MailCountProps) => {

  return (
    <Container>
      <Count>{count}</Count>
      <Label>{` mail item${count === 1 ? '' : 's'}`}</Label>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Label = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`

const Count = styled(Label)` 
  font-weight: 700;
  margin-right: 4px;
`

export default MailCount;
