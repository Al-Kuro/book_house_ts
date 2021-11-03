import styled from "styled-components";
import media from "../../responsive";

export const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 100px;
  padding: 20px 50px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  border: 1px solid #fff;

  ${media.mobile(`
    width: 95%;
    border-radius: initial;
    border: initial;
    padding: 0;
  `)}
`;

export const WrapperIconMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.mobile(`
    flex-direction: column;
  `)}
`;

export const Wrapper = styled.div`
  position: relative;
  top: 5px;
  left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  flex-wrap: wrap;

  ${media.mobile(`
      top: 0;
      left: 0;
      margin: 0;
  `)}
`;

export const UrlIcon = styled.a`
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    transform: translateY(-10px);
  }
`;

export const IconImage = styled.img`
  width: 35px;
  height: 35px;
  padding: 5px;

  :hover {
    color: #000;
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
  }

  ${media.mobile(`
    padding: 6px;
  `)}
`;

export const Line = styled.span`
  font-size: 3em;
  color: #000;
  position: relative;
  top: 0;
  left: 50px;

  ${media.mobile(`
    display: none;
  `)}
`;

export const UrlMenu = styled.a`
  font-size: 1.4em;
  color: #000;
  font-weight: 700;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    color: #000;
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
    transform: translateY(-10px);
  }

  ${media.mobile(`
    padding: 0 5px;
    font-size: 1.2em;
  `)}
`;

export const AllRightsReserved = styled.p`
  position: relative;
  left: -5px;
  text-align: center;
  margin: 15px 0 10px 0;
  font-size: 1em;
  color: #000;
  font-weight: 600;

  ${media.mobile(`
    margin: 0;
    font-size: 0.9em;
  `)}
`;
