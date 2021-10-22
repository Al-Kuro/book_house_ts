import * as React from "react";
import styled from "styled-components";

interface UpdateSoonCardProps {
  card: {};
  img: string;
  title: string;
  description: string;
}

const Card = styled.div`
  position: relative;

  &:hover #ContentClose {
    opacity: 1;
  }

  &:hover #Image {
    max-width: 100px;
  }

  &:hover #FaceClose {
    transform: translateY(0);
    background: #ff0057;
  }

  &:hover #FaceOpen {
    transform: translateY(0);
  }
`;
const FaceClose = styled.div`
  width: 300px;
  height: 200px;
  transition: 0.5s;
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
`;
const ContentClose = styled.div`
  opacity: 0.2;
  transition: 0.5s;
`;
const Image = styled.img``;
const Title = styled.h3`
  margin: 10px 0 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
`;
const FaceOpen = styled.div`
  width: 300px;
  height: 200px;
  transition: 0.5s;
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
`;
const ContentOpen = styled.div``;
const Description = styled.p``;
const ReadMoreButton = styled.button`
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;

  :hover {
    background: #333;
    color: #fff;
    cursor: pointer;
  }
`;

const UpdateSoonCard: React.FC<UpdateSoonCardProps> = ({
  img,
  title,
  description,
}: UpdateSoonCardProps) => {
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
          <Description>{description}</Description>
          <ReadMoreButton>Read More</ReadMoreButton>
        </ContentOpen>
      </FaceOpen>
    </Card>
  );
};

export default UpdateSoonCard;
