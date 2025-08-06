import { create } from "zustand"

interface Store {
  toasts: { id: string; content: string }[]
  addToast: (content: string) => void
  removeToast: (id: string) => void
}

export const useToastStore = create<Store>((set) => ({
  toasts: [],
  addToast: (content: string) =>
    set((state) => ({
      toasts: [...state.toasts, { id: Math.random().toString(), content }],
    })),
  removeToast: (id: string) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}))
