import styled from "styled-components";

export const LayoutContainer = styled.div`
 display: flex;
 width: 100%;
 max-width: 100%;
 height: 100vh;
 max-height: 100vh;
`;

export const Content = styled.aside`
  width: calc(100% - 200px);
  max-width: calc(100% - 200px);
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  position: relative;
`;