import { NavLink, Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

export const AppLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <GlobalStyle />
    </>
  );
};
