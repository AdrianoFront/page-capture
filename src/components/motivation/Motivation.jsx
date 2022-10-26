/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import styled from 'styled-components'

const StyledMotivation = styled.div`
  margin: 0 auto;
`

const StyledMission = styled.div`
  background-color: #ae00ff;
  display: flex;
  width: 150px;
  height: 150px;
  border: 3px solid;
  border-radius: 15px;
  font-size: 2em;
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
