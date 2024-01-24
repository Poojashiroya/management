import {
  ColContainer,
  OrderTableWrapper,
  Row,
  Select,
  SelectHeader,
  SelectTd,
  Table,
  TableBody,
  TableHeader,
  Td,
  Th,
  TotalPrice,
  TransportationPrice,
} from "./index.styles";

const OrderTable = ({orderData, select, handleSelect}) => {
  
  return (
    <OrderTableWrapper>
      <Table>
        <TableHeader>
          <SelectHeader>
            <Select
              type="checkbox"
              checked={select.includes("all")}
              onChange={() => handleSelect("all")}
            />
          </SelectHeader>
          <Th>ID</Th>
          <Th>Client Name</Th>
          <Th>Date</Th>
          <Th>Vehicle No.</Th>
          <Th>Transporter</Th>
          <Th>
            Weight <br />
            (Tons)
          </Th>
          <ColContainer rowSpan={2}>
            Price
            <Th>Sand</Th>
            <Th>Transportation</Th>
            <Th>Total</Th>
          </ColContainer>
          <ColContainer rowSpan={2}>
            Ordered
            <Th>Sand</Th>
            <Th>Transportation</Th>
            <Th>Total</Th>
          </ColContainer>
        </TableHeader>
        <TableBody>
          {orderData && orderData.length > 0 &&
            orderData.map((order, index) => (
              <Row key={`order ${index}`}>
                <SelectTd>
                  <Select
                    type="checkbox"
                    checked={select.includes(order.id)}
                    onChange={() => handleSelect(order.id)}
                  />
                </SelectTd>
                <Td>{order.id}</Td>
                <Td>{order.clientName}</Td>
                <Td>{order.date}</Td>
                <Td>{order.vehicleNumber}</Td>
                <Td>{order.transporter}</Td>
                <Td>{order.weight}</Td>
                <Td>
                  <Td>{order.sandPrice}</Td>
                  <TransportationPrice>
                    {order.transportationPrice}
                  </TransportationPrice>
                  <TotalPrice>
                    {Number(order.sandPrice) + Number(order.transportationPrice)}
                  </TotalPrice>
                </Td>
                <Td>
                  <Td>{order.orderedSandPrice}</Td>
                  <TransportationPrice>
                    {order.orderedTransportationPrice}
                  </TransportationPrice>
                  <TotalPrice>
                    {Number(order.orderedSandPrice) + Number(order.orderedTransportationPrice)}
                  </TotalPrice>
                </Td>
              </Row>
            ))}
        </TableBody>
      </Table>
    </OrderTableWrapper>
  );
};

export default OrderTable;
