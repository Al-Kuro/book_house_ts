import React, { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../images/Logo.png";
import {
  Center,
  Container,
  Input,
  Left,
  LogoImage,
  LogoUrl,
  Menu,
  MenuItem,
  MenuItemContainer,
  MenuLink,
  Right,
  SearchContainer,
  ToggleMenu,
} from "../styles/NavBar";

interface NavBarProps {
  toggleMenu: boolean;
}

const NavBar: FC<NavBarProps> = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <Container>
      <Left>
        <LogoUrl>
          <LogoImage src={Logo} />
        </LogoUrl>
      </Left>
      <Center>
        <Menu>
          <ToggleMenu
            toggleMenu={toggleMenu}
            onClick={() => setToggleMenu(true)}
          />
          <MenuLink>Home</MenuLink>
          <MenuLink>User</MenuLink>
          <MenuLink>About</MenuLink>
          <MenuLink>Contact</MenuLink>
        </Menu>
      </Center>
      <Right>
        <MenuItemContainer>
          <MenuItem>Log In</MenuItem>
          <MenuItem>Registration</MenuItem>
        </MenuItemContainer>
        <SearchContainer>
          <Input type="text" placeholder="Search" />
          <SearchIcon
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              paddingRight: "10px",
              color: "#000",
              borderRight: "1px solid #000",
            }}
          />
        </SearchContainer>
      </Right>
    </Container>
  );
};

export default NavBar;
