/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import styled from 'styled-components'

const StyledMotivation = styled.div`
  margin: 0 auto;
`

const StyledMission = styled.div`
  background-color: #ae00ff;
  height: 140px;
  width: 140px;
  background-position: center;
  border: none;
  border-radius: 40px;
  margin: 30px 20px;
`

export default function Motivation() {
  return (
    <StyledMotivation>
      <h2>Nossa missão está em:</h2>
      <StyledMission>
        <p>Criar</p>
      </StyledMission>
      <p>Colaborar</p>
      <p>Confiar</p>
      <p>Construir</p>
    </StyledMotivation>
  )
}
