import styled from "styled-components"

export const Home = () => {
  return (
    <Container>
      <p>A simple Pokedex!</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 32px;
`
