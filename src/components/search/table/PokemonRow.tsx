import styled from "styled-components"
import { usePokemonDetails } from "../../../api/hooks"
import { TableCell, TableRow } from "./common"
import { useNavigate } from "react-router"
import { typesString } from "../../../utils"

export const PokemonRow = ({
  name,
  isTableLoading,
}: {
  name: string | null
  isTableLoading: boolean
}) => {
  const { isFetching, data } = usePokemonDetails(name)
  const navigate = useNavigate()

  const tableData = data ?? {
    name: "-",
    id: "-",
    types: [{ type: { name: "-" } }],
  }

  return (
    <TableRow onClick={() => navigate(`/pokemon/${data?.name}`)}>
      <TableCell>
        {isTableLoading || isFetching ? <Skeleton /> : tableData?.id}
      </TableCell>
      <TableCell>
        {isTableLoading || isFetching ? <Skeleton /> : tableData?.name}
      </TableCell>
      <TableCell>
        {isTableLoading || isFetching ? (
          <Skeleton />
        ) : (
          typesString(tableData?.types)
        )}
      </TableCell>
    </TableRow>
  )
}

const Skeleton = () => {
  return <Loader />
}

const Loader = styled.div`
  width: 80px;
  height: 17px;
  background-color: #eee;
  animation-duration: 1s;
  animation-name: pulse;
  animation-iteration-count: infinite;

  @keyframes pulse {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
