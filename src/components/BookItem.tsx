import React, { FC } from "react";
import {
  Author,
  Card,
  ContentClose,
  ContentOpen,
  Description,
  FaceClose,
  FaceOpen,
  Image,
  ReadMoreButton,
  Title,
} from "../styles/BookItem";

interface BookItemProps {
  book: {};
  img: string;
  title: string;
  author: string;
  description: string;
}

const BookItem: FC<BookItemProps> = ({
  img,
  title,
  author,
  description,
}: BookItemProps) => {
  return (
    <Card>
      <FaceClose id="FaceClose">
        <ContentClose id="ContentClose">
          <Image src={img} id="Image" />
        </ContentClose>
      </FaceClose>
      <FaceOpen id="FaceOpen">
        <ContentOpen>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Description>{description}</Description>
          <ReadMoreButton>Read More</ReadMoreButton>
        </ContentOpen>
      </FaceOpen>
    </Card>
  );
};

export default BookItem;
