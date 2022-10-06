import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'
import Credits from '../src/components/credits/credits'

export default function HomePage() {
  return (
    <>
      <Title> Conteúdo </Title>
      <Input type="text" placeholder="Digite sua opinião" />
      <Button onClick />
      <Credits />
    </>
  )
}
