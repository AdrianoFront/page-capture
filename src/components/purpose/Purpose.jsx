import styled from 'styled-components'

const StyledPurpose = styled.div`
  margin: 5px;
`

export default function Purpose() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Container>
      <h2>Nossos ideiais são:</h2>
      <ul>
        <li>Criar vínculos</li>
        <li>Melhorar a vida das pessoas</li>
        <li>Simplificar processos</li>
        <li>Aliar tecnologia e gente</li>
      </ul>
    </Container>
  )
}
