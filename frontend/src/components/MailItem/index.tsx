import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import MailItemType from '../../types/MailItem'
import Attribute from '../Attribute'

type MailItemProps = {
  mailItem?: MailItemType
}

const MailItem = ({mailItem}: MailItemProps) => {

  if (!mailItem) return null

  const {
    businessRecipient,
    individualRecipient,
    scan,
    from,
    imageUrl,
    timestamp,
    forward,
    shred
  } = mailItem

  return (
    <Container>
      <Picture src={imageUrl}/>
      <Content>
        <Body>
          <Title>{from}</Title>
          {businessRecipient && <Attribute type='company' text={businessRecipient} />}
          {individualRecipient && <Attribute type='recipient' text={individualRecipient} />}
          {
            scan &&
            <Attribute
              type={scan.status === 'completed' ? 'scan' : 'processing'}
              text={scan.status === 'completed' ? 'Scanned' : 'Scan processing'}
            />
          }
          {
            forward &&
            <Attribute
              type={forward.status === 'completed' ? 'forward' : 'processing'}
              text={forward.status === 'completed' ? 'Forwarded' : 'Forward processing'}
            />
          }
          {
            shred &&
            <Attribute
              type={shred.status === 'completed' ? 'shred' : 'processing'}
              text={shred.status === 'completed' ? 'Shredded' : 'Shred processing'}
            />
          }
        </Body>
        <Footer>
          <Date>{dayjs(timestamp).format('MMMM D, YYYY')}</Date>
        </Footer>
      </Content>


    </Container>
  );
}

const Date = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  text-transform: capitalize;
  color: #606060;
  margin-right: 15px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Footer = styled.div`
  height: 39px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Body = styled.div`
  padding-left: 8px;
  padding-top: 12px;
  flex: 1;
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;;
`

const Title = styled.h1`
  font-family: PT Sans, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: -0.02em;
  text-align: left;
`

const Picture = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 256px;
  height: 126.53px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #DEE2E6;
  border-radius: 7px;
  width: 300px;
  height: 349px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 22px;
`

export default MailItem;
