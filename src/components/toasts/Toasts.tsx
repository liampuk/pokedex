import { createPortal } from "react-dom"
import { useToastStore } from "../../store/toasts"
import styled from "styled-components"
import { Toast } from "./Toast"

export const Toasts = () => {
  const { toasts } = useToastStore()

  return createPortal(
    <ToastWrapper>
      {toasts.map((toast) => (
        <Toast id={toast.id} alert={toast.content} key={`toast-${toast.id}`} />
      ))}
    </ToastWrapper>,
    document.body
  )
}

const ToastWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 32px;
  margin-inline: auto;
  width: fit-content;
`
