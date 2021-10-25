import * as React from "react";
import styled from "styled-components";
import { bookCard } from "../fakeData/data";
import CardBody from "./CardBody";

interface CardsBodyProps {}

const Container = styled.div`
  margin-top: 50px;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardsBody: React.FC<CardsBodyProps> = () => {
  return (
    <Container>
      {bookCard.map((book) => (
        <CardBody
          key={book.id}
          book={book}
          img={book.img}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </Container>
  );
};

export default CardsBody;
