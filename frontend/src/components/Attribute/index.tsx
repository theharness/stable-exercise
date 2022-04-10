import React from 'react'
import AttributeIcons from '../../types/AttributeIcons'
import companyIcon from '../../assets/company.svg'
import forwardIcon from '../../assets/forward.svg'
import processingIcon from '../../assets/processing.svg'
import recipientIcon from '../../assets/recipient.svg'
import scanIcon from '../../assets/scan.svg'
import shredIcon from '../../assets/shred.svg'
import styled from 'styled-components'

type AttributeProps = {
  type: AttributeIcons
  text: string
}

const Attribute = ({ type, text }: AttributeProps) => {

  let svgIcon = companyIcon

  switch (type) {
    case 'company':
      svgIcon = companyIcon
      break
    case 'forward':
      svgIcon = forwardIcon
      break
    case 'processing':
      svgIcon = processingIcon
      break
    case 'scan':
      svgIcon = scanIcon
      break
    case 'shred':
      svgIcon = shredIcon
      break
    case 'recipient':
      svgIcon = recipientIcon
      break
  }

  return (
    <Container>
      <Icon src={svgIcon} />
      <Text>{text}</Text>
    </Container>
  )
}

const Text = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  margin-left: 7px;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10.5px;
`

export default Attribute