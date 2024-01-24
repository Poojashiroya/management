import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

export const OrdersContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: whitesmoke;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 4px;
  box-shadow: 1px 1px lightgray;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: -webkit-fill-available;
  justify-content: space-between;
`;

export const ModalButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 70%;
  justify-content: flex-end;
  margin: 0 auto;
`;

export const CloseModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: whitesmoke;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 8px;
  box-shadow: 1px 1px lightgray;
  font-size: 16px;
`;

export const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  background: lightblue;
  color: #fff;
  padding: 8px;
  font-size: 16px;
`;

export const DetailsContainer = styled.div`
  width: 70%;
  display: flex;
  max-width: 70%;
  margin: 0 auto;
  gap: 12px;
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 width: 30%;
 gap: 8px;
`

export const Input = styled.input`
  border-radius: 5px;
  outline: none;
  border: none;
  background: whitesmoke;
  padding: 8px;
  height: fit-content;
`;

export const Label = styled.label``;

export const Property = styled.div`
 display: flex;
 gap: 8px;
 align-items: center;
`;