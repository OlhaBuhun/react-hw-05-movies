import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: orange;
  }
`;

export default function MovieDetails() {
  return (
    <div>
      <p>MovieDetails</p>
      <ul>
        <li>
          <StyledLink to="cast">cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">reviews</StyledLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
