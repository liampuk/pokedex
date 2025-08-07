import { afterEach, expect, test, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { NavBar } from "./NavBar"

const mockNavigate = vi.fn()

vi.mock("react-router", () => ({
  useNavigate: () => mockNavigate,
}))

afterEach(() => {
  cleanup()
  vi.resetAllMocks()
})

test("NavBar should render buttons", () => {
  render(<NavBar />)
  const button = screen.getByText("Home")
  fireEvent.click(button)
  expect(mockNavigate).toHaveBeenCalled()
})
