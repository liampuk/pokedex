import styled from "styled-components"
import { usePokemon } from "../../../api/hooks"
import { PokemonRow } from "./PokemonRow"
import { TableCell, TableRow } from "./common"
import { Pagination } from "./Pagination"
import { useState } from "react"
import { useSearchParams } from "react-router"

const PAGE_SIZE = 10

export const Table = () => {
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get("page")) || 1
  const offset = (page - 1) * PAGE_SIZE
  const { isFetching, data } = usePokemon(offset)

  const tableData = data ?? {
    results: new Array(PAGE_SIZE).fill({ name: null }),
    count: 10,
  }

  return (
    <>
      <TableContainer>
        <HeaderRow>
          <TableCell>Number</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Types</TableCell>
        </HeaderRow>
        {tableData?.results?.map((pokemon, i) => (
          <PokemonRow
            isTableLoading={isFetching}
            name={pokemon.name}
            key={`table-row-${i}`}
          />
        ))}
      </TableContainer>
      <Pagination numItems={tableData.count} />
    </>
  )
}

const HeaderRow = styled(TableRow)`
  cursor: default;
  &:hover {
    background-color: inherit;
  }
`

const TableContainer = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`
