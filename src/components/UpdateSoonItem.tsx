import React, { FC } from "react";
import {
  Card,
  FaceClose,
  ContentClose,
  Image,
  Title,
  FaceOpen,
  ContentOpen,
  Description,
  ReadMoreButton,
} from "../styles/UpdateSoonItem";

interface UpdateSoonItemProps {
  key: number;
  card: { id: number; img: string; title: string; description: string };
  img: string;
  title: string;
  description: string;
}

const UpdateSoonItem: FC<UpdateSoonItemProps> = ({
  img,
  title,
  description,
}: UpdateSoonItemProps) => {
  return (
    <Card>
      <FaceClose id="FaceClose">
        <ContentClose id="ContentClose">
          <Image src={img} id="Image" />
          <Title>{title}</Title>
        </ContentClose>
      </FaceClose>
      <FaceOpen id="FaceOpen">
        <ContentOpen>
          <Description id="Description">{description}</Description>
          <ReadMoreButton>Read More</ReadMoreButton>
        </ContentOpen>
      </FaceOpen>
    </Card>
  );
};

export default UpdateSoonItem;
