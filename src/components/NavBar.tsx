import * as React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../images/Logo.png";

interface NavBarProps {}

const Container = styled.header`
  margin-top: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 100;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  border: 1px solid #fff;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoUrl = styled.a`
  position: relative;
  left: -50px;
`;
const LogoImage = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
`;

const Menu = styled.nav`
  position: relative;
  left: -80px;
`;
const MenuLink = styled.a`
  margin: 20px 20px 20px 0;
  padding: 5px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;

  :hover {
    color: #000;
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -60px;
`;

const MenuItem = styled.a`
  margin: 20px 20px 20px 0;
  padding: 5px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;

  :hover {
    color: #000;
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
  height: 40px;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #000;
  font-weight: 500;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  border-radius: 4px;
  padding: 0 10px 0 45px;
  backdrop-filter: blur(10px);

  ::placeholder {
    color: #000;
    font-weight: 500;
  }
`;

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Container>
      <Left>
        <LogoUrl>
          <LogoImage src={Logo} />
        </LogoUrl>
      </Left>
      <Center>
        <Menu>
          <MenuLink>Home</MenuLink>
          <MenuLink>User</MenuLink>
          <MenuLink>About</MenuLink>
          <MenuLink>Contact</MenuLink>
        </Menu>
      </Center>
      <Right>
        <MenuItemContainer>
          <MenuItem>Log in</MenuItem>
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
