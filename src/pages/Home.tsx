import React, { FC } from "react";
import BookCards from "../components/BookCards";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import UpdateSoonCards from "../components/UpdateSoonCards";
import { Container, UpdateTitle } from "../styles/pages/Home";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <Container>
      <NavBar />
      <BookCards />
      <UpdateTitle>Update Soon</UpdateTitle>
      <UpdateSoonCards />
      <Footer />
    </Container>
  );
};

export default Home;
