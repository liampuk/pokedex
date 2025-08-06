import styled from "styled-components"
import { Button } from "../../../commonStyles"
import { useSearchParams } from "react-router"

type Props = {
  numItems: number
}

export const Pagination = ({ numItems }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get("page")) || 1
  const pageCount = Math.ceil(numItems / 10)

  const onChange = (page: number) => {
    setSearchParams({ page: `${page}` })
  }

  let pageA,
    pageB,
    pageC = 0

  if (page > 1 && page < pageCount) {
    pageA = page - 1
    pageB = page
    pageC = page + 1
  } else if (page === 1) {
    pageA = 1
    pageB = 2
    pageC = 3
  } else {
    pageA = page - 2
    pageB = page - 1
    pageC = page
  }

  return (
    <Container>
      <PaginationButton onClick={() => onChange(Math.max(1, page - 1))}>
        {"< Previous"}
      </PaginationButton>
      {page > 2 && (
        <>
          <PaginationButton onClick={() => onChange(1)} $active={page === 1}>
            1
          </PaginationButton>
          <PaginationSeparator>...</PaginationSeparator>
        </>
      )}
      <PaginationButton
        onClick={() => onChange(pageA)}
        $active={page === pageA}
      >
        {pageA}
      </PaginationButton>
      <PaginationButton
        onClick={() => onChange(pageB)}
        $active={page === pageB}
      >
        {pageB}
      </PaginationButton>
      <PaginationButton
        onClick={() => onChange(pageC)}
        $active={page === pageC}
      >
        {pageC}
      </PaginationButton>
      {page < pageCount - 1 && (
        <>
          <PaginationSeparator>...</PaginationSeparator>
          <PaginationButton
            onClick={() => onChange(pageCount)}
            $active={page === pageCount}
          >
            {pageCount}
          </PaginationButton>
        </>
      )}

      <PaginationButton onClick={() => onChange(page + 1)}>
        {"Next >"}
      </PaginationButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

const PaginationButton = styled(Button)<{ $active?: boolean }>`
  background-color: white;
  padding: 8px 12px;
  ${({ $active }) => $active && `border: 1px solid #ddd;`}

  &:hover {
    background-color: #eee;
  }
`

const PaginationSeparator = styled.div`
  padding: 8px;
`
