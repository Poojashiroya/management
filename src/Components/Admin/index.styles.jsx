import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 18px 40px;
  box-sizing: border-box;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: #384d6c;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #d0d0d0;
  width: fit-content;
  margin: 8px 0;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  color: #384d6c;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PropertyVal = styled.p`
  display: flex;
  align-items: center;
  color: #384d6c;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #fff;
  outline: none;
  color: #384d6c;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 5px 8px;
`;

export const Edit = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  border: none;
  background: none;
  outline: none;
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Submit = styled.button`
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #384d6c;
  background: var(--peak-primary, #384d6c);
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const Status = styled.p`
  font-size: 14px;
  color: red;
  margin: 4px 0;
`;

export const Row = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 gap: 24px;
`;