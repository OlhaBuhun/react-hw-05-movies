import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 64px;
  justify-content: space-between;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  background-color: yellow;
`;

export const NavStyled = styled.nav`
  display: flex;
`;

export const NavLinkStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 20px;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  color: blue;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
