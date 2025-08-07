import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, expect, test, vi } from "vitest"
import { NavBar } from "./NavBar"

const mockedNavigate = vi.fn()

vi.mock("react-router", () => {
  const actual = vi.importActual("react-router")
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  }
})

afterEach(() => {
  cleanup()
})

test("testing", () => {
  render(<NavBar />)
  expect(screen.getByText("Pokedex")).toBeDefined()
})

test("testing", () => {
  render(<NavBar />)
  const button = screen.getByText("Home")
  fireEvent.click(button)
  expect(mockedNavigate).toHaveBeenCalled()
})
