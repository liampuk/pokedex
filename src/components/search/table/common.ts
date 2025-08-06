import styled from "styled-components"

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  transition: background-color 0.1s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`

export const TableCell = styled.div`
  padding: 10px 16px;
  height: 40px;
  font-size: 15px;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
`
