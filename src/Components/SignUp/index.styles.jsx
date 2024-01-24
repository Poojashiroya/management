import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  justify-content: space-between;
  background: linear-gradient(224deg, #8bb2b2 31.18%, #b3cdcd 101.35%);
`;

export const SignUpLeft = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px 30px;
  box-sizing: border-box;
  justify-content: space-evenly;
`;

export const SignUpRight = styled.aside`
  border-radius: 30px 0px 0px 30px;
  background: #fff;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-sizing: border-box;
`;

export const Logo = styled(Link)``;

export const Img = styled.img``;

export const CreateAccount = styled.h4`
  color: #525252;
  font-family: Poppins;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 25px;
  align-self: center;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Detail = styled.div`
  width: 50%;
`;

export const Input = styled.input`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;

  ::placeholder {
    color: #a1a1a1;
  }
`;

export const Submit = styled.button`
  border-radius: 6px;
  background: #8bb2b2;
  color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
  align-self: center;
  margin: 50px 0 25px;
  width: 50%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AlreadyExist = styled.p`
  color: #a1a1a1;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LoginLink = styled(Link)`
  color: #8bb2b2;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
`;

export const Error = styled.p`
 color: red;
 font-size: 14px;
 margin: 15px 0 0;
`;