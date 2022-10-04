import Title from '../src/components/title'
// eslint-disable-next-line no-unused-vars
import Button from '../src/components/button/button'
// eslint-disable-next-line no-unused-vars
import Input from '../src/components/input/input'

export default function HomePage() {
  return (
    <>
      <Title> Conteúdo </Title>
      <input type="text" placeholder="Digite sua opinião" />
      <button onClick={onClick}/>
    </>
  )
}
