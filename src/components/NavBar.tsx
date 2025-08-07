import styled from "styled-components"
import { Button } from "../commonStyles"
import { useNavigate } from "react-router"

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <h3>Pokedex</h3>
      <Button onClick={() => navigate("")}>Home</Button>
      <Button onClick={() => navigate("search")}>Search</Button>
      <Button onClick={() => navigate("party")}>Party</Button>
    </Container>
  )
}
const Container = styled.nav`
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 16px;
  display: flex;
  gap: 32px;
  align-items: center;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); */
`
