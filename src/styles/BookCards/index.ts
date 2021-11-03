import styled from "styled-components";
import media from "../../responsive";

export const Container = styled.div`
  margin-top: 50px;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  border: 1px solid #fff;

  ${media.mobile(`
    margin-top: 20px;
    width: 95%;
    border-radius: initial;
    border: initial;
  `)}
`;
