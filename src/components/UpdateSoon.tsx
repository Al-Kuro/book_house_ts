import * as React from "react";
import styled from "styled-components";
import { updateSoonCard } from "../fakeData/data";
import UpdateSoonCard from "./UpdateSoonCard";

interface UpdateSoonProps {}

const Container = styled.div`
  margin-top: 50px;
  width: 1100px;
  display: flex;
  justify-content: space-between;
  border-top: 5px solid teal;
`;

const UpdateSoon: React.FC<UpdateSoonProps> = () => {
  return (
    <Container>
      {updateSoonCard.map((card) => (
        <UpdateSoonCard
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

export default UpdateSoon;
