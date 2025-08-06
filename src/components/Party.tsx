import styled from "styled-components"
import { usePartyStore } from "../store/party"
import { PokemonDetails } from "./pokemon/PokemonDetails"
import { Button } from "../commonStyles"
import { useToastStore } from "../store/toasts"

export const Party = () => {
  const { pokemon, removePokemon } = usePartyStore()
  const { addToast } = useToastStore()

  const handleRemovePokemon = (id: string, name: string) => {
    removePokemon(id)
    addToast(`${name} removed from party`)
  }

  return (
    <Container>
      {pokemon.map((partyPokemon) => (
        <PartyItem id={`party-item-${partyPokemon.id}`}>
          <PokemonDetails name={partyPokemon.name} />
          <Button
            onClick={() =>
              handleRemovePokemon(partyPokemon.id, partyPokemon.name)
            }
          >
            Remove Pokemon
          </Button>
        </PartyItem>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const PartyItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
