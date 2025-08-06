import { Outlet, useNavigate } from "react-router"
import styled from "styled-components"
import { GlobalStyle } from "../globalStyle"
import { Button } from "../commonStyles"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toasts } from "./toasts/Toasts"

export const Root = () => {
  const navigate = useNavigate()
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <NavBar>
        <h3>Pokedex</h3>
        <Button onClick={() => navigate("")}>Home</Button>
        <Button onClick={() => navigate("search")}>Search</Button>
        <Button onClick={() => navigate("party")}>Party</Button>
      </NavBar>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Toasts />
    </QueryClientProvider>
  )
}

const NavBar = styled.nav`
  width: 100%;
  border-bottom: 1px solid black;
  padding: 16px;
  display: flex;
  gap: 32px;
  align-items: center;
`

const Wrapper = styled.div`
  padding: 32px;
  max-width: 800px; /* or any value */
  margin: 0 auto;
`
