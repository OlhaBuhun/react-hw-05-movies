import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  HeaderStyled,
  NavLinkStyled,
  NavStyled,
  StyledLink,
} from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <>
      <HeaderStyled>
        <NavStyled>
          <NavLinkStyled>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </NavLinkStyled>
        </NavStyled>
      </HeaderStyled>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
};
