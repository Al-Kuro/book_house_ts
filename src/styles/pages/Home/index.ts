import styled from "styled-components";
import media from "../../../responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const UpdateTitle = styled.h1`
  margin-top: 100px;

  ${media.mobile(`
    margin-top: 40px;
  `)}
`;
