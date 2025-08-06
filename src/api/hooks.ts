import { keepPreviousData, useQuery } from "@tanstack/react-query"

export type PokemonResponse = {
  count: number
  results: {
    name: string
    url: string
  }[]
}

export type PokemonDetailResponse = {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: Type[]
}

export type Type = {
  type: {
    name: string
  }
}

export const pokemonDetailsQuery = async (name: string | null | undefined) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  if (!response.ok) {
    throw new Error("Could not find Pokemon")
  }
  return await response.json()
}

export const usePokemon = (offset: number) =>
  useQuery({
    queryKey: ["pokemon", offset],
    queryFn: async (): Promise<PokemonResponse> => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
      )
      return await response.json()
    },
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  })

export const usePokemonDetails = (name: string | null | undefined) =>
  useQuery({
    queryKey: ["pokemon-detail", name],
    queryFn: async () => pokemonDetailsQuery(name),
    enabled: !!name,
    placeholderData: keepPreviousData,
    refetchOnMount: false,
    retry: false,
  })
