// eslint-disable-next-line no-unused-vars
import styled from 'styled-components'

import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'
import Main from '../src/components/main/main'
import Purpose from '../src/components/purpose/Purpose'
import Credits from '../src/components/credits/Credits'

export default function HomePage() {
  return (
    <>
      <Title> Conteúdo </Title>
      <Main />
      <Purpose />
      <Input type="text" placeholder="Digite sua opinião" />
      <Button onClick />
      <Credits />
    </>
  )
}
