import React from 'react';
import { Container, H1, P, Card } from '..styled'

function App() {
  return (
    <Container>
      <H1>Headline</H1>
      <H2>chamada secundária</H2>
      <P>Descrição do produto e soluções oferecidas pelo produto.</P>
      <Card>{...props}</Card>
    </Container>
  )
}

export default App
