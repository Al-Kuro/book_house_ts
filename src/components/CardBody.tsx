import * as React from "react";
import styled from "styled-components";

interface CardBodyProps {
  book: {};
  img: string;
  title: string;
  author: string;
  description: string;
}

const Card = styled.div`
  position: relative;
  max-width: 250px;
  height: 215px;
  background: #fff;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;

  :hover {
    height: 420px;
  }
  &:hover #ContentContainer {
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 230px;
  height: 260px;
  top: -60px;
  left: -5px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  position: relative;
  top: 0;
  left: 35px;
  width: 160px;
  height: 220px;
  border-radius: 4px;
`;

const ContentContainer = styled.div`
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
`;

const Title = styled.h1``;

const Author = styled.h2``;

const Description = styled.p``;

const CardBody: React.FC<CardBodyProps> = ({
  img,
  title,
  author,
  description,
}: CardBodyProps) => {
  return (
    <Card>
      <ImgContainer>
        <Image src={img} />
      </ImgContainer>
      <ContentContainer id="ContentContainer">
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Description>{description}</Description>
      </ContentContainer>
    </Card>
  );
};

export default CardBody;
