/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
