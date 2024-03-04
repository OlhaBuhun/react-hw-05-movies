import { fetchCastMovie } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsMovie() {
      try {
        const { cast } = await fetchCastMovie(movieId);
        if (cast.length === 0) {
          return;
        }
        setCast(cast);
      } catch (error) {
        toast.error(
          'Opps! Somathing went wrong! Please try reloading this page'
        );
      }
    }
    getReviewsMovie();
  }, [movieId]);

  return (
    <section>
      {cast === null ? (
        <p>We don`t have cast for this movie</p>
      ) : (
        <ul>
          {cast?.map(({ original_name, character, profile_path, id }) => (
            <li key={id}>
              <img
                src={
                  profile_path &&
                  `http://image.tmdb.org/t/p/w342${profile_path}`
                }
                alt={original_name}
                width="240"
              />
              <h3>{original_name}</h3>
              <h3>Character: {character}</h3>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cast;
