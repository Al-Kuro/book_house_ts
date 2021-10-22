import * as React from "react";
import styled from "styled-components";
import { bookCard } from "../fakeData/data";
import CardBody from "./CardBody";

interface CardsBodyProps {}

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #16384c;
  width: 80%;
  height: 400px;
  padding: 30px;
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
