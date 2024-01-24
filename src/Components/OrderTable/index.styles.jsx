import styled from "styled-components";

export const OrderTableWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 8px;
  width: 100%;
`;

export const TableHeader = styled.thead`
  border-radius: 8px;
  background: #eaf0f0;

  & > *:first-of-type {
    border-radius: 8px 0 0 0;
  }

  & > *:last-of-type {
    border-radius: 0px 8px 0 0;
  }
`;

export const Th = styled.th`
  width: 120px;
  margin: 0;
  padding: 8px;
  text-align: left;
  border-collapse: collapse;
`;

export const ColContainer = styled(Th)`
  text-align: center;
`;

export const TableBody = styled.tbody`
  background: #eceded;
  width: 100%;
`;

export const Row = styled.tr`
  border: 1px solid grey;
  border-left: none;
  border-right: none;
  border-collapse: collapse;
`;

export const Td = styled.td`
  width: 120px;
  padding: 8px;
`;

export const TransportationPrice = styled.td`
  width: 130px;
  padding: 8px;
  text-align: center;
`;

export const TotalPrice = styled.td`
  width: 120px;
  padding: 8px;
  text-align: end;
`;

export const SelectHeader = styled.th`
  width: fit-content;
  padding: 22px 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectTd = styled.td`
  width: fit-content;
  padding: 14px 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.input`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;
