import * as React from "react";
import styled from "styled-components";
import CardsBody from "../components/CardsBody";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import UpdateSoon from "../components/UpdateSoon";

interface HomeProps {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const UpdateTitle = styled.h1`
  margin-top: 100px;
`;

const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      <NavBar />
      <Header />
      <CardsBody />
      <UpdateTitle>Update Soon</UpdateTitle>
      <UpdateSoon />
      <Footer />
    </Container>
  );
};

export default Home;
