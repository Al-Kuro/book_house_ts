import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0;

  &:hover #Image {
    max-width: 100%;
  }

  &:hover #FaceClose {
    transform: translateX(0);
  }

  &:hover #FaceOpen {
    transform: translateX(0);
  }
`;

export const FaceClose = styled.div`
  width: 150px;
  height: 220px;
  transition: 0.5s;
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateX(75px);
`;

export const ContentClose = styled.div`
  transition: 0.5s;
`;

export const Image = styled.img`
  width: 150px;
  height: 220px;
`;

export const FaceOpen = styled.div`
  width: 150px;
  height: 220px;
  transition: 0.5s;
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateX(-75px);
`;

export const ContentOpen = styled.div``;

export const Title = styled.h3`
  color: #000;
  text-align: center;
  font-size: 1.5em;
`;

export const Author = styled.h4`
  margin: 3px 0;
  text-align: center;
`;

export const Description = styled.p`
  margin: 3px 0;
  text-align: center;
  font-size: 0.9em;
`;

export const ReadMoreButton = styled.button`
  display: inline-block;
  font-weight: 900;
  color: #333;
  position: relative;
  top: 10px;
  left: 14px;
  padding: 5px;
  border: 1px solid #333;

  :hover {
    background: #333;
    color: #fff;
    cursor: pointer;
  }
`;
