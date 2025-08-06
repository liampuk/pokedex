import { useNavigate, useParams } from "react-router"
import { Button } from "../../commonStyles"
import styled from "styled-components"
import { usePartyStore } from "../../store/party"
import { useToastStore } from "../../store/toasts"
import { PokemonDetails } from "./PokemonDetails"

export const Pokemon = () => {
  const { pokemonName } = useParams()
  const { pokemon, addPokemon } = usePartyStore()
  const { addToast } = useToastStore()
  const navigate = useNavigate()

  const addToParty = () => {
    if (pokemonName) {
      if (pokemon.length < 6) {
        addPokemon(pokemonName)
        addToast(`${pokemonName} added to party`)
      } else {
        addToast("Your party already has 6 Pokemon!")
      }
    }
  }

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
      <Title>{pokemonName}</Title>
      <PokemonDetails />
      <Button onClick={addToParty}>Add to Party</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  position: relative;
`

const BackButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
`

const Title = styled.p`
  text-transform: capitalize;
  font-size: 24px;
`
