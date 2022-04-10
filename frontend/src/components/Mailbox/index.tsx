import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import listMail from '../../api/queries/listMail'
import MailItemType from '../../types/MailItem'
import {Spinner, Row, Col} from 'reactstrap'
import Button from '../Button'
import MailItem from '../MailItem'
import MailCount from '../MailCount'
import colors from '../../styles/colors'

const pageSize = 6

const Mailbox = () => {

  const [loading, setLoading] = useState(true)
  const [mail, setMail] = useState<MailItemType[]>([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchMail = async () => {
      setLoading(true)
      try {
        const response = await listMail()
        setMail(response.data.data.listMail)
      } catch (e) {
        setError('An unexpected error occurred, see log for details. Please refresh to try again.')
        console.error(e)
      }
      setLoading(false)
    }

    fetchMail()
  }, [])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [page])

  const renderMail = () => {
    const columns = []
    for (let i = (page - 1) * pageSize; i < page * pageSize; i++) {
      columns.push(
        <MailCol key={i} xl={4} xxl={4} lg={4} md={6} sm={12} xs={12}>
          <MailItem mailItem={mail[i]} />
        </MailCol>
      )
    }

    return <Row>
      { columns }
    </Row>
  }

  return (
    <Container>
      <Title>All Mail</Title>
      <Subtitle>Here are all of the pieces of mail you've received at your Stable address</Subtitle>
      { error && <Error>{error}</Error>}
      <MailItemContainer>
        {
          loading ? (
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          ):
          renderMail()
        }
      </MailItemContainer>
      <Footer>
        <MailCount count={mail.length} />
        <ButtonContainer>
          <Button
            onClick={() => setPage(prev => prev - 1)}
            disabled={page === 1}
            text='Previous'
          />
          <Button
            onClick={() => setPage(prev => prev + 1)}
            disabled={page === Math.ceil(mail.length / pageSize)}
            text='Next'
          />
        </ButtonContainer>
      </Footer>
    </Container>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Container = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  flex-direction: row;
`

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  margin-top: 16px;
`

const MailItemContainer = styled.div`
  margin-top: 29px;
`

const Title = styled.h1`
  font-family: PT Sans, sans-serif;
  font-size: 29px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 12px;
`

const Subtitle = styled.div`
  font-family: Noto Sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`

const Error = styled(Subtitle)`
  color: ${colors.danger}
`

const MailCol = styled(Col)`
  justify-content: center;
  align-items: center;
`

export default Mailbox;
