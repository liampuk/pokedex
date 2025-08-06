import styled from "styled-components"

import { useState } from "react"
import { Button } from "../../commonStyles"
import { Table } from "./table/Table"
import { useNavigate } from "react-router"
import { pokemonDetailsQuery } from "../../api/hooks"
import { useQueryClient } from "@tanstack/react-query"
import { useToastStore } from "../../store/toasts"

export const Search = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { addToast } = useToastStore()

  const handleSearch = async () => {
    const searchName = search.toLowerCase()
    try {
      await queryClient.fetchQuery({
        queryKey: ["pokemon-detail", searchName],
        queryFn: () => pokemonDetailsQuery(searchName),
      })
      navigate(`/pokemon/${searchName}`)
    } catch {
      addToast(`Cannot find Pokemon ${search}`)
    }
  }

  return (
    <Container>
      <SearchSection>
        <p>Search: </p>
        <SearchBox
          placeholder="Pokemon Name"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchSection>
      <Table />
    </Container>
  )
}

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const SearchBox = styled.input`
  width: 200px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`
