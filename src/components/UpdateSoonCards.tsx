import React, { FC } from "react";
import { updateSoonCard } from "../fakeData/data";
import { Container } from "../styles/UpdateSoonCards";
import UpdateSoonItem from "./UpdateSoonItem";

interface UpdateSoonCardsProps {}

const UpdateSoonCards: FC<UpdateSoonCardsProps> = () => {
  return (
    <Container>
      {updateSoonCard.map((card) => (
        <UpdateSoonItem
          key={card.id}
          card={card}
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
    </Container>
  );
};

export default UpdateSoonCards;
