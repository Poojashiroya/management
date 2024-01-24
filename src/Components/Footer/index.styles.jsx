import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
  background: #1e2833;
  position: absolute;
  bottom: 0;
`;

export const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 80px;
  justify-content: space-between;
`;

export const FooterDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
`;

export const FooterLogoLink = styled(Link)`
  cursor: pointer;
`;

export const FooterLogo = styled.img`
  width: 32px;
  height: 32px;
`;

export const FooterDescription = styled.p`
  color: #fff;
  max-width: 293px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.205px;
`;

export const Lists = styled.div`
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
  justify-content: space-around;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ListTitle = styled.li`
  color: #ffd2dd;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.232px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.205px;
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  justify-content: space-netween;
`;

export const CopyRight = styled.p`
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.232px;
  opacity: 0.5;
`;

export const PrivactTermsContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 24px;
`

