import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'
import Credits from '../src/components/credits/credits'
import Main from '../src/components/main/main'

export default function HomePage() {
  return (
    <>
      <Title> Conteúdo </Title>
      <Main />
      <Input type="text" placeholder="Digite sua opinião" />
      <Button onClick />
      <Credits />
    </>
  )
}
