import { useState } from "react";

import OrderTable from "../OrderTable";
import Search from "../Search";
import orders from "../../data/order";

import {
  Button,
  ButtonsWrapper,
  CloseModal,
  Content,
  DetailsContainer,
  HeaderWrapper,
  Input,
  Label,
  ModalButtons,
  ModalContentContainer,
  OrdersContainer,
  Property,
  Submit,
} from "./index.styles";
import Icons from "../../Icons";
import ReactModal from "react-modal";

const Orders = () => {
  const [orderData, setOrderData] = useState(orders);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState();
  const [select, setSelect] = useState([]);
  const [add, setAdd] = useState({
    id: "",
    clientName: "",
    weight: "",
    date: "",
    transporter: "",
    vehicleNumber: "",
    sandPrice: "",
    transportationPrice: "",
    orderedSandPrice: "",
    orderedTransportationPrice: "",
  });
  const [addSubmit, setAddSubmit] = useState(false);
  const [openEditModal, setEditModal] = useState(false);
  const [edit, setEdit] = useState({
    id: "",
    clientName: "",
    weight: "",
    date: "",
    transporter: "",
    vehicleNumber: "",
    sandPrice: "",
    transportationPrice: "",
    orderedSandPrice: "",
    orderedTransportationPrice: "",
  });
  const [editSubmit, setEditSubmit] = useState(false);

  // multi select checkbox
  const handleSelect = (val) => {
    if (select.includes(val)) {
      if (val !== "all") {
        const newCopy = select.filter((item) => item !== val);
        setSelect(newCopy);
      }
      if (val === "all") {
        setSelect([]);
      }
    }
    if (!select.includes(val)) {
      if (val !== "all") setSelect([...select, val]);
      if (val === "all") {
        const selected = ["all"];
        orderData.map((order) => selected.push(order.id));
        setSelect([...selected]);
      }
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value) {
      const filteredData = orders.filter(
        (order) =>
          (order.id.includes(value) ||
            order.clientName.includes(value) ||
            order.date.includes(value) ||
            order.weight.includes(value) ||
            order.sandPrice.includes(value) ||
            order.transportationPrice.includes(value) ||
            order.orderedSandPrice.includes(value) ||
            order.orderedTransportationPrice.includes(value)) &&
          order
      );
      setOrderData([...filteredData]);
    }
    if (!value) {
      setOrderData(orders);
    }
  };

  const handleEdit = () => {
    setEditModal(true);

    const selectedID = select.includes("all") ? select[1] : select[0];
    const selectedItem = orderData.filter((order) => order.id === selectedID);
    setEdit({
      id: selectedItem[0].id,
      clientName: selectedItem[0].clientName,
      weight: selectedItem[0].weight,
      date: selectedItem[0].date,
      transporter: selectedItem[0].transporter,
      vehicleNumber: selectedItem[0].vehicleNumber,
      sandPrice: selectedItem[0].sandPrice,
      transportationPrice: selectedItem[0].transportationPrice,
      orderedSandPrice: selectedItem[0].orderedSandPrice,
      orderedTransportationPrice: selectedItem[0].orderedTransportationPrice,
    });
  };

  const handleEditChange = (event, property) => {
    const value = event.target.value;
    let editCopy = { ...edit };
    if (property === "id") editCopy = { ...editCopy, id: value };
    if (property === "clientName")
      editCopy = { ...editCopy, clientName: value };
    if (property === "weight") editCopy = { ...editCopy, weight: value };
    if (property === "date") editCopy = { ...editCopy, date: value };
    if (property === "vehicleNumber")
      editCopy = { ...editCopy, vehicleNumber: value };
    if (property === "transporter")
      editCopy = { ...editCopy, transporter: value };
    if (property === "sandPrice") editCopy = { ...editCopy, sandPrice: value };
    if (property === "transportationPrice")
      editCopy = { ...editCopy, transportationPrice: value };
    if (property === "orderedSandPrice")
      editCopy = { ...editCopy, orderedSandPrice: value };
    if (property === "orderedTransportationPrice")
      editCopy = { ...editCopy, orderedTransportationPrice: value };

    if (
      editCopy &&
      editCopy.id &&
      editCopy.clientName &&
      editCopy.weight &&
      editCopy.date &&
      editCopy.vehicleNumber &&
      editCopy.transporter &&
      editCopy.transportationPrice &&
      editCopy.sandPrice &&
      editCopy.orderedSandPrice &&
      editCopy.orderedTransportationPrice
    )
      setEditSubmit(true);

    setEdit(editCopy);
  };

  const handleEditCancel = () => {
    setEdit({
      clientName: "",
      weight: "",
      date: "",
      transporter: "",
      vehicleNumber: "",
      sandPrice: "",
      transportationPrice: "",
      orderedSandPrice: "",
      orderedTransportationPrice: "",
    });
    setEditModal(false);
  };

  const handleEditSubmit = () => {
    const selectedID = select.includes("all") ? select[1] : select[0];
    const updatedOrders = orderData.map((order) => {
      let newOrder = { ...order };
      if (order.id === selectedID) {
        newOrder = { ...edit };
        return newOrder;
      }
      return newOrder;
    });

    setOrderData(updatedOrders);
    setEditModal(false);
  };

  const handleDelete = () => {
    let newData = [...orderData];
    newData = newData.filter((order) => !select.includes(order.id));
    setOrderData(newData);
  };

  //  on click add show modal
  const handleAdd = () => {
    setModalOpen(true);
  };

  // on add when adding user data
  const handleChange = (event, property) => {
    const value = event.target.value;
    let addCopy = { ...add };
    if (property === "id") addCopy = { ...addCopy, id: value };
    if (property === "clientName") addCopy = { ...addCopy, clientName: value };
    if (property === "weight") addCopy = { ...addCopy, weight: value };
    if (property === "date") addCopy = { ...addCopy, date: value };
    if (property === "vehicleNumber")
      addCopy = { ...addCopy, vehicleNumber: value };
    if (property === "transporter")
      addCopy = { ...addCopy, transporter: value };
    if (property === "sandPrice") addCopy = { ...addCopy, sandPrice: value };
    if (property === "transportationPrice")
      addCopy = { ...addCopy, transportationPrice: value };
    if (property === "orderedSandPrice")
      addCopy = { ...addCopy, orderedSandPrice: value };
    if (property === "orderedTransportationPrice")
      addCopy = { ...addCopy, orderedTransportationPrice: value };
    if (
      addCopy &&
      addCopy.id &&
      addCopy.clientName &&
      addCopy.weight &&
      addCopy.date &&
      addCopy.vehicleNumber &&
      addCopy.transporter &&
      addCopy.sandPrice &&
      addCopy.transportationPrice &&
      addCopy.orderedSandPrice &&
      addCopy.orderedTransportationPrice
    )
      setAddSubmit(true);

    setAdd(addCopy);
  };

  // cancel add
  const handleAddCancel = () => {
    setAdd({
      id: "",
      clientName: "",
      weight: "",
      date: "",
      transporter: "",
      vehicleNumber: "",
      sandPrice: "",
      transportationPrice: "",
      orderedSandPrice: "",
      orderedTransportationPrice: "",
    });
    setModalOpen(false);
  };

  // submit add
  const handleAddSubmit = () => {
    const newData = [...orderData, add];
    orders.push(add);
    setOrderData(newData);
    setModalOpen(false);
  };

  return (
    <div>
      <HeaderWrapper>
        <Search search={search} handleSearchChange={handleSearchChange} />
        <ButtonsWrapper>
          <Button disabled={select.length === 0} onClick={handleEdit}>
            <img src={Icons.EditIcon} alt="Edit" width="32px" height="32px" />
          </Button>
          <Button disabled={select.length === 0} onClick={handleDelete}>
            <img
              src={Icons.TrashIcon}
              alt="delete"
              width="32px"
              height="32px"
            />
          </Button>
          <Button onClick={handleAdd}>
            <img src={Icons.AddIcon} alt="add" width="32px" height="32px" />
          </Button>
        </ButtonsWrapper>
      </HeaderWrapper>
      <OrdersContainer>
        <OrderTable
          orderData={orderData}
          select={select}
          handleSelect={handleSelect}
        />
      </OrdersContainer>
      {/* Edit Modal */}
      <ReactModal
        isOpen={openEditModal}
        onRequestClose={() => setEditModal(false)}
        ariaHideApp={false}
      >
        <ModalContentContainer>
          <DetailsContainer>
            <Content>
              <Property>
                <Label>Id: </Label>
                <Input
                  value={edit.id}
                  onChange={(e) => handleEditChange(e, "id")}
                />
              </Property>
              <Property>
                <Label>ClientName: </Label>
                <Input
                  value={edit.clientName}
                  onChange={(e) => handleEditChange(e, "clientName")}
                />
              </Property>
              <Property>
                <Label>Weight: </Label>
                <Input
                  value={edit.weight}
                  onChange={(e) => handleEditChange(e, "weight")}
                />
              </Property>
              <Property>
                <Label>Date: </Label>
                <Input
                  value={edit.date}
                  onChange={(e) => handleEditChange(e, "date")}
                />
              </Property>
            </Content>
            <Content>
              <Property>
                <Label>Vehicle No: </Label>
                <Input
                  value={edit.vehicleNumber}
                  onChange={(e) => handleEditChange(e, "vehicleNumber")}
                />
              </Property>
              <Property>
                <Label>Transporter: </Label>
                <Input
                  value={edit.transporter}
                  onChange={(e) => handleEditChange(e, "transporter")}
                />
              </Property>
              <Property>
                <Label>Sand Price: </Label>
                <Input
                  value={edit.sandPrice}
                  onChange={(e) => handleEditChange(e, "sandPrice")}
                />
              </Property>
            </Content>
            <Content>
              <Property>
                <Label>Transportation Price: </Label>
                <Input
                  value={edit.transportationPrice}
                  onChange={(e) => handleEditChange(e, "transportationPrice")}
                />
              </Property>
              <Property>
                <Label>Ordered Sand Price: </Label>
                <Input
                  value={edit.orderedSandPrice}
                  onChange={(e) => handleEditChange(e, "orderedSandPrice")}
                />
              </Property>
              <Property>
                <Label>Ordered Transportation Price: </Label>
                <Input
                  value={edit.orderedTransportationPrice}
                  onChange={(e) =>
                    handleEditChange(e, "orderedTransportationPrice")
                  }
                />
              </Property>
            </Content>
          </DetailsContainer>
          <ModalButtons>
            <CloseModal onClick={handleEditCancel}>Cancel</CloseModal>
            <Submit disabled={!editSubmit} onClick={handleEditSubmit}>
              Submit
            </Submit>
          </ModalButtons>
        </ModalContentContainer>
      </ReactModal>
      {/* add modal */}
      <ReactModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        ariaHideApp={false}
      >
        <ModalContentContainer>
          <DetailsContainer>
            <Content>
              <Property>
                <Label>Id: </Label>
                <Input value={add.id} onChange={(e) => handleChange(e, "id")} />
              </Property>
              <Property>
                <Label>ClientName: </Label>
                <Input
                  value={add.clientName}
                  onChange={(e) => handleChange(e, "clientName")}
                />
              </Property>
              <Property>
                <Label>Weight: </Label>
                <Input
                  value={add.weight}
                  onChange={(e) => handleChange(e, "weight")}
                />
              </Property>
              <Property>
                <Label>Date: </Label>
                <Input
                  value={add.date}
                  onChange={(e) => handleChange(e, "date")}
                />
              </Property>
            </Content>
            <Content>
              <Property>
                <Label>Vehicle No: </Label>
                <Input
                  value={add.vehicleNumber}
                  onChange={(e) => handleChange(e, "vehicleNumber")}
                />
              </Property>
              <Property>
                <Label>Transporter: </Label>
                <Input
                  value={add.transporter}
                  onChange={(e) => handleChange(e, "transporter")}
                />
              </Property>
              <Property>
                <Label>Sand Price: </Label>
                <Input
                  value={add.sandPrice}
                  onChange={(e) => handleChange(e, "sandPrice")}
                />
              </Property>
            </Content>
            <Content>
              <Property>
                <Label>Transportation Price: </Label>
                <Input
                  value={add.transportationPrice}
                  onChange={(e) => handleChange(e, "transportationPrice")}
                />
              </Property>
              <Property>
                <Label>Ordered Sand Price: </Label>
                <Input
                  value={add.orderedSandPrice}
                  onChange={(e) => handleChange(e, "orderedSandPrice")}
                />
              </Property>
              <Property>
                <Label>Ordered Transportation Price: </Label>
                <Input
                  value={add.orderedTransportationPrice}
                  onChange={(e) =>
                    handleChange(e, "orderedTransportationPrice")
                  }
                />
              </Property>
            </Content>
          </DetailsContainer>
          <ModalButtons>
            <CloseModal onClick={handleAddCancel}>Cancel</CloseModal>
            <Submit onClick={handleAddSubmit} disabled={!addSubmit}>
              Submit
            </Submit>
          </ModalButtons>
        </ModalContentContainer>
      </ReactModal>
    </div>
  );
};

export default Orders;
