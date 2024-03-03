import { fetchMovieDetails } from 'api';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: orange;
  }
`;

export default function MovieDetails() {
  const location = useLocation();
  const linkRef = useRef(location);
  const backLinkHref = linkRef.current.state?.from ?? '/';

  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetalis() {
      try {
        const fetchDetails = await fetchMovieDetails(movieId);
        setMovieDetails(fetchDetails);
      } catch (error) {
        toast.error(
          'Opps! Somathing went wrong! Please try reloading this page'
        );
      }
    }
    getMovieDetalis();
  }, [movieId]);

  if (!movieDetails) return;

  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieDetails;

  const poster = poster_path && `http://image.tmdb.org/t/p/w342${poster_path}`;
  const date = release_date && release_date.slice(0, 4);
  const rating = vote_average && Math.round(vote_average * 10);

  return (
    <div>
      <Link to={backLinkHref}>
        <b>Go back</b>
      </Link>
      <div>
        <img src={poster} alt={title} width="240" />
        <h1>
          {title} ({date})
        </h1>
        <p>{overview}</p>
        <h2>user Score: {rating}%</h2>
        <h2>Genres</h2>
        <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
      </div>
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
