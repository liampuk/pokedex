import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, expect, test, vi } from "vitest"
import { NavBar } from "./NavBar"

const mockedNavigate = vi.fn()

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router")
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  }
})

// vi.mock("react-router", async () => ({
//   useNavigate: () => mockedNavigate(),
// }))

afterEach(() => {
  cleanup()
  vi.resetAllMocks()
})

test("testing2", () => {
  render(<NavBar />)
  const button = screen.getByText("Home")
  fireEvent.click(button)
  expect(mockedNavigate).toHaveBeenCalled()
})

test("testing4", () => {
  render(<NavBar />)
  expect(screen.getByText("Pokedex")).toBeDefined()
})

test("testing3", () => {
  render(<NavBar />)
  const button = screen.getByText("Home")
  fireEvent.click(button)
  expect(mockedNavigate).toHaveBeenCalled()
})
