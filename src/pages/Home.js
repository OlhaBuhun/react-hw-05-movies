import { fetchTrendingMovie } from 'api';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);

  useEffect(() => {
    async function getTrendingMovie() {
      try {
        setIsLoading(true);

        const { results } = await fetchTrendingMovie();
        setTrendMovies(results);
      } catch (error) {
        toast.error(
          'Opps! Somathing went wrong! Please try reloading this page'
        );
      } finally {
        setIsLoading(false);
      }
    }

    getTrendingMovie();
  }, []);
  return (
    <div>
      <h1>Trending movies</h1>
      <MovieList movies={trendMovies} />
    </div>
  );
}
