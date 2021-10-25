import * as React from "react";
import styled from "styled-components";
import facebookIcon from "../images/icons/iconsSocialNetworks/facebookIcon.svg";
import instagramIcon from "../images/icons/iconsSocialNetworks/instagramIcon.svg";
import pinterestIcon from "../images/icons/iconsSocialNetworks/pinterestIcon.svg";
import twitterIcon from "../images/icons/iconsSocialNetworks/twitterIcon.svg";

interface FooterProps {}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 100px);
  height: 150px;
  padding: 20px 50px;
  background: teal;
`;

const WrapperIconMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  top: 5px;
  left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  flex-wrap: wrap;
`;

const UrlIcon = styled.a`
  font-size: 2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    transform: translateY(-10px);
  }
`;

const Line = styled.span`
  font-size: 3em;
  color: white;
  position: relative;
  top: 0;
  left: 50px;
`;

const IconImage = styled.img`
  width: 22px;
  height: 22px;
`;

const UrlMenu = styled.a`
  font-size: 1.2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s;
  opacity: 0.75;

  :hover {
    opacity: 1;
  }
`;

const AllRightsReserved = styled.p`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 1em;
  color: #fff;
`;

const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <WrapperIconMenu>
        <Wrapper>
          <UrlIcon>
            <IconImage src={facebookIcon} />
          </UrlIcon>
          <UrlIcon>
            <IconImage src={instagramIcon} />
          </UrlIcon>
          <UrlIcon>
            <IconImage src={pinterestIcon} />
          </UrlIcon>
          <UrlIcon>
            <IconImage src={twitterIcon} />
          </UrlIcon>
        </Wrapper>
        <Line>|</Line>
        <Wrapper>
          <UrlMenu>Home</UrlMenu>
          <UrlMenu>User</UrlMenu>
          <UrlMenu>About</UrlMenu>
          <UrlMenu>Contact</UrlMenu>
        </Wrapper>
      </WrapperIconMenu>
      <AllRightsReserved>
        ©2021 Book House | All Rights Reserved
      </AllRightsReserved>
    </Container>
  );
};

export default Footer;
