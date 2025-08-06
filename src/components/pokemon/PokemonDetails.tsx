import styled from "styled-components"
import { typesString } from "../../utils"
import { usePokemonDetails } from "../../api/hooks"
import { useParams } from "react-router"

export const PokemonDetails = ({ name }: { name?: string }) => {
  const { pokemonName } = useParams()
  const nameActual = name ?? pokemonName
  const { data } = usePokemonDetails(nameActual)

  return (
    <Section>
      <Sprite src={data?.sprites.front_default} />
      <Data>
        <p>#{data?.id}</p>
        <p>name: {nameActual}</p>
        <p>types: {typesString(data?.types)}</p>
      </Data>
    </Section>
  )
}

const Section = styled.div`
  display: flex;
  gap: 32px;
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`

const Sprite = styled.img`
  height: 100px;
  width: 100px;
  border: 2px solid #eee;
  border-radius: 8px;
`
