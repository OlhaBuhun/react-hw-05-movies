import { NavLink, Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Suspense } from 'react';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: orange;
  }
`;

export const AppLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </>
  );
};
