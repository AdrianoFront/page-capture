/* eslint-disable prettier/prettier */
import styled from 'styled-components'

const MainDiv = styled.h1`
  font-weight: bold;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.primary};
`

export default function Main() {
  return (
    <>
      <MainDiv>
        <h1>Adriano Solutions</h1>
        <h2>Conheça nosso trabalho através de produtos tecnológicos</h2>
        <p>Nós da Empresa vamos entregar soluções que vão aproximar pessoas, 
          facilitar a cooperação com tecnologia.</p>
      </MainDiv>
    </>
  )
}
