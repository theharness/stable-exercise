import React, {MouseEventHandler} from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'

type ButtonProps = {
  disabled: boolean
  onClick: MouseEventHandler
  text: string
}

const Button = ({ disabled, onClick, text }: ButtonProps) => {
  return <ButtonParent onClick={onClick} disabled={disabled}>
    <TextContainer>
      <Text>{text}</Text>
    </TextContainer>
  </ButtonParent>
}

const ButtonParent = styled.button<{ disabled: boolean }>`
  width: 100px;
  height: 38px;
  background: #FFFFFF;
  border: 1px solid ${props => props.disabled ? '#C4C4C4' : colors.secondary};
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  ${props => !props.disabled && `&:hover { background: ${colors.secondary}; color: #FFFFFF}`}
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Text = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`

export default Button
