import styled from "styled-components";
import media from "../../responsive";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover #ContentClose {
    opacity: 1;
  }

  &:hover #Image {
    width: 120px;
    height: 120px;

    ${media.mobile(`
         width: 70px;
         height: 70px;
    `)}

    ${media.mobile(`
      position: relative;
    `)}
  }

  &:hover #FaceClose {
    transform: translateY(0);
    background: #ff0057;
  }

  &:hover #FaceOpen {
    transform: translateY(0);
  }
`;
export const FaceClose = styled.div`
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

  ${media.mobile(`
      width: 150px;
      height: 130px;
      transform: translateY(65px);
  `)}
`;
export const ContentClose = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
  transition: 0.5s;
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;

  ${media.mobile(`
      width: 65px;
      height: 65px;
      padding-top: 5px;
  `)}
`;
export const Title = styled.h3`
  margin: 10px 0 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;

  ${media.mobile(`
      margin: 3px 0 0;
      font-size: 1.1em;
  `)}
`;
export const FaceOpen = styled.div`
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

  ${media.mobile(`
      width: 150px;
      height: 130px;
      transform: translateY(-65px);
  `)}
`;
export const ContentOpen = styled.div``;
export const Description = styled.p`
  font-size: 0.9em;

  ${media.mobile(`
      font-size: 0.7em;
  `)}
`;
export const ReadMoreButton = styled.button`
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

  ${media.mobile(`
      margin: 3px 0;
      padding: 2px;
      font-size: 0.7em;
  `)}
`;
