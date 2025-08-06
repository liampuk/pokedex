import { createBrowserRouter } from "react-router"
import { Root } from "./components/Root"
import { Home } from "./components/Home"
import { Party } from "./components/Party"
import { Search } from "./components/search/Search"
import { NotFound } from "./components/NotFound"
import { Pokemon } from "./components/pokemon/Pokemon"

export const router = createBrowserRouter([
  {
    path: "/pokedex",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "party", Component: Party },
      { path: "search", Component: Search },
      { path: "pokemon/:pokemonName", Component: Pokemon },
    ],
  },
  { path: "*", Component: NotFound },
])
