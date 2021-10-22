import * as React from "react";
import styled from "styled-components";
import header from "../images/yellow_header.png";

interface HeaderProps {}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  max-width: 1200px;
  max-height: 600px;
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <Image src={header} />
    </Container>
  );
};

export default Header;
