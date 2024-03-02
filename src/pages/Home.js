import { fetchTrendingMovie } from 'api';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(isLoading);
  console.log(isError);

  useEffect(() => {
    async function getTrendingMovie() {
      try {
        setIsLoading(true);

        const { results } = await fetchTrendingMovie();
        setTrendMovies(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getTrendingMovie();
  }, []);
  return (
    <div>
      <h1>Trending movies</h1>
      {/* <ul>
        {trendMovies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul> */}
      <MovieList movies={trendMovies} />
    </div>
  );
}
