import styled from 'styled-components'

export default function Form() {
  return <form>
    <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
  </form>
}
