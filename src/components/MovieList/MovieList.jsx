/* eslint-disable react/prop-types */

import { Link, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
