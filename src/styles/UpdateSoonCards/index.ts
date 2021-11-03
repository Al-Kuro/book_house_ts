import styled from "styled-components";
import media from "../../responsive";

export const Container = styled.div`
  margin-top: 50px;
  width: 1100px;
  display: flex;
  justify-content: space-around;
  border-top: 5px solid teal;

  ${media.mobile(`
    margin-top: 30px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 95%;
  `)}
`;
