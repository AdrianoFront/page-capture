import styled from 'styled-components'

const Copyright = styled.div`
  padding: 10px;
`

export default function Credits() {
  return (
    <Copyright>
      <p>Desenvolvido por Adriano</p>
      <a href="#">Github</a>
      <a href="#">LinkedIn</a>
    </Copyright>
  )
}
