import React, { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Center,
  Container,
  Input,
  Left,
  Title,
  Menu,
  MenuItem,
  MenuItemContainer,
  MenuLink,
  Right,
  SearchContainer,
  ToggleMenu,
} from "../styles/NavBar";

interface NavBarProps {}

const NavBar: FC = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <Container>
      <Left>
        <Menu>
          <ToggleMenu
            toggleMenu={toggleMenu}
            onClick={() => setToggleMenu(true)}
          >
            <MenuLink>Home</MenuLink>
            <MenuLink>User</MenuLink>
            <MenuLink>About</MenuLink>
            <MenuLink>Contact</MenuLink>
          </ToggleMenu>
        </Menu>
      </Left>
      <Center>
        <Title>Book House</Title>
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
