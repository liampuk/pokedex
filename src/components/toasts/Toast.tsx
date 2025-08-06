import { useEffect } from "react"
import styled from "styled-components"
import { useToastStore } from "../../store/toasts"

export const Toast = ({ id, alert }: { id: string; alert: string }) => {
  const { removeToast } = useToastStore()

  useEffect(() => {
    console.log(id)
    const timer = setTimeout(() => {
      console.log(id)
      removeToast(id)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return <Container>{alert}</Container>
}

const Container = styled.div`
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  min-width: 400px;
  margin-bottom: 16px;
`
