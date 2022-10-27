import styled from 'styled-components'

const Copyright = styled.div`
  padding: 10px;
`

export default function Credits() {
  return (
    <Copyright>
      <p>Desenvolvido por Adriano</p>
      <a href="https://github.com/AdrianoFront">Github</a>
      <a href="https://www.linkedin.com/in/adrianodeveloper/">LinkedIn</a>
    </Copyright>
  )
}
