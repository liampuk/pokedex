import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface Party {
  pokemon: { name: string; id: string }[]
  addPokemon: (name: string) => void
  removePokemon: (name: string) => void
}

// export const usePartyStore = create<Party>((set) => ({
//   pokemon: [],
//   addPokemon: (name: string) =>
//     set((state) => ({
//       pokemon: [...state.pokemon, { name: name, id: Math.random().toString() }],
//     })),
//   removePokemon: (id: string) =>
//     set((state) => ({
//       pokemon: state.pokemon.filter((partyPokemon) => partyPokemon.id !== id),
//     })),
// }))

export const usePartyStore = create<Party>()(
  persist(
    (set, get) => ({
      pokemon: [],
      addPokemon: (name: string) =>
        set({
          pokemon: [
            ...get().pokemon,
            { name: name, id: Math.random().toString() },
          ],
        }),
      removePokemon: (id: string) =>
        set({
          pokemon: get().pokemon.filter(
            (partyPokemon) => partyPokemon.id !== id
          ),
        }),
    }),
    {
      name: "pokemon-party-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

/*
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type BearStore = {
  bears: number
  addABear: () => void
}

export const useBearStore = create<BearStore>()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
*/
