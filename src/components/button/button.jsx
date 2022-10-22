import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: collumn;
  max-width: 400px;

  label {
    font-weight: bold;
  }

  button {
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;
    font-weight: bold;
    border: 0;
    padding: 10px;
    border-radius: 5px;
  }
`

export default function Button() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <ButtonContainer>
      <label>Clique abaixo:</label>
      <button>Breve</button>
    </ButtonContainer>
  )
}
