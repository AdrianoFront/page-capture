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
      </MainDiv>
    </>
  )
}
