import { Outlet } from "react-router"
import styled from "styled-components"
import { GlobalStyle } from "../globalStyle"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toasts } from "./toasts/Toasts"
import { NavBar } from "./NavBar"

export const Root = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <NavBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Toasts />
    </QueryClientProvider>
  )
}

const Wrapper = styled.div`
  padding: 32px;
  max-width: 800px; /* or any value */
  margin: 0 auto;
`
