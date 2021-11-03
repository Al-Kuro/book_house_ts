import styled from "styled-components";
import media from "../../responsive";
import menu from "../../images/icons/iconsToggleMenu/menu.svg";

export const Container = styled.header`
  margin-top: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  border: 1px solid #fff;

  ${media.mobile(`
    width: 95%;
    flex-direction: column;
    padding: 1px;
    border-radius: initial;
    border: initial;
    `)}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1``;

export const Center = styled.div`
  flex: 1;
  display: flex;
`;

interface ToggleMenuProps {
  toggleMenu: boolean;
  onClick: () => void;
}

export const ToggleMenu = styled.div<ToggleMenuProps>`
  ${media.mobile(`
  position: absolute;
  top: -3px;
  left: -97px;
  width: 50px;
  height: 50px;
  background: url(${menu});
  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  `)}/*.active {
    background: #fff url(${menu});
    background-size: 30px;
    background-position: center;
    background-repeat: no-repeat;
  }*/
`;

export const Menu = styled.nav`
  position: relative;
  left: -80px;
`;
export const MenuLink = styled.a`
  margin: 10px 10px 10px 0;
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

  ${media.mobile(`display: none;`)}
`;

export const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media.mobile(`
  `)}
`;

export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -60px;

  ${media.mobile(`
    flex-direction: column;
    left: -30px;
  `)}
`;

export const MenuItem = styled.a`
  margin: 10px 10px 10px 0;
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

  ${media.mobile(`
    display: none;
  `)}
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 300px;
  height: 40px;

  ${media.mobile(`
    width: 280px;
    height: 30px;
    margin-bottom: 5px;
  `)}
`;

export const Input = styled.input`
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
