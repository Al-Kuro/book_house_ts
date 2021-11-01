import React, { FC } from "react";
import { bookCard } from "../fakeData/data";
import { Container } from "../styles/BookCards";
import BookItem from "./BookItem";

interface BookCardsProps {}

const BookCards: FC<BookCardsProps> = () => {
  return (
    <Container>
      {bookCard.map((book) => (
        <BookItem
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

export default BookCards;
