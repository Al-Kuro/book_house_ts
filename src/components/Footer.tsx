import React, { FC } from "react";
import facebookIcon from "../images/icons/iconsSocialNetworks/facebookIcon.svg";
import instagramIcon from "../images/icons/iconsSocialNetworks/instagramIcon.svg";
import pinterestIcon from "../images/icons/iconsSocialNetworks/pinterestIcon.svg";
import twitterIcon from "../images/icons/iconsSocialNetworks/twitterIcon.svg";
import {
  AllRightsReserved,
  Container,
  IconImage,
  Line,
  UrlIcon,
  UrlMenu,
  Wrapper,
  WrapperIconMenu,
} from "../styles/Footer";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
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
