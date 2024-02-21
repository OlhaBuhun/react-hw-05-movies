import { NavLink, Outlet } from 'react-router-dom';

export default function MovieDetails() {
  return (
    <div>
      <p>MovieDetails</p>
      <ul>
        <li>
          <NavLink to="cast">cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
