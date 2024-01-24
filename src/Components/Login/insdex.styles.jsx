import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const LoginLeft = styled.div`
  width: 53%;
  display: flex;
  flex-direction: column;
  padding: 65px 45px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 153px;
  height: 39px;
`;

export const Input = styled.input`
  color: #4a5568;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.154px;
  display: flex;
  padding: 8px 12px;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #cbd5e0;
  background: #f7fafc;
  box-shadow: 0px 2px 0px 0px rgba(231, 235, 238, 0.2) inset;
`;

export const LoginContent = styled.div`
  padding-left: 54px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 65px;

  ${Input}:first-of-type {
    margin-bottom: 28px;
  }
`;

export const Title = styled.h4`
  color: #171923;
  font-size: 48px;
  font-weight: 700;
  line-height: 100%;
`;

export const NewAccount = styled.p`
  color: #718096;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  margin: 34px 0 40px;
`;

export const CreateAccount = styled(Link)`
  color: #1c4532;
  font-weight: 500;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const Label = styled.label`
  color: #718096;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.154px;
  margin-bottom: 14px;
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #718096;
  font-size: 16px;
  font-weight: 400;
  line-height: 39px;
  margin: 24px 0 20px;
`;

export const RememberCheckbox = styled.input`
  cursor: pointer;
`;

export const SignInBtn = styled.button`
  border-radius: 20px;
  background: #1c4532;
  padding: 0px 24px;
  color: #f7fafc;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  padding: 8px 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const LoginRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1c4532;
  width: 47%;
  height: 100vh;
  padding: 57px 45px 45px;
  box-sizing: border-box;
`;

export const SupportContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 18px;
  color: #f7fafc;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

export const SupportImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const CardImg = styled.img`
  margin: 153px 0 70px;
`;

export const Feature = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
`;

export const FeatureTitle = styled.h4`
  color: #f7fafc;
  font-size: 40px;
  font-weight: 600;
  line-height: 100%;
`;

export const FeatureDescription = styled.p`
  color: #cfd9e0;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 138.5%;
`;
