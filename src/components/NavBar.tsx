import * as React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../images/Logo.png";

interface NavBarProps {}

const Container = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 100px;
  z-index: 100;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const LogoUrl = styled.div``;
const LogoImage = styled.img`
  max-width: 150px;
  max-height: 150px;
  margin-left: 50px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
`;

const Menu = styled.nav``;
const MenuLink = styled.a`
  margin: 0 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;

  :hover {
    color: #de0611;
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
  margin-right: 200px;
`;

const MenuItem = styled.div`
  margin: 0 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;

  :hover {
    color: #de0611;
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
  color: #fff;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  outline: none;
  border-radius: 4px;
  padding: 0 10px 0 45px;
  backdrop-filter: blur(10px);

  ::placeholder {
    color: #fff;
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
              color: "#fff",
              borderRight: "1px solid #fff",
            }}
          />
        </SearchContainer>
      </Right>
    </Container>
  );
};

export default NavBar;
