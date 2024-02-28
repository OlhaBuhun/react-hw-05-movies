import { searchMovie } from 'api';
// import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [query, setQueru] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieSearch = searchParams.get('query') ?? '';

  const handleNameChange = event => {
    setQueru(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ query: query });
    setQueru('');
  };

  useEffect(() => {
    if (movieSearch.trim() === '') {
      // toast.error('Щось напиши');
      return;
    }

    async function getSearchMovie() {
      try {
        setIsLoading(true);

        const { results } = await searchMovie(movieSearch);
        setMovies(results);
      } catch (error) {
        toast.error(
          'Opps! Somathing went wrong! Please try reloading this page'
        );
      } finally {
        setIsLoading(false);
      }
    }
    getSearchMovie();
    console.log(isLoading);
    console.log(movies);
    console.log(movieSearch);
  }, [movieSearch]);

  return (
    <div>
      <SearchForm
        value={query}
        onChange={handleNameChange}
        onSubmit={handleSubmit}
      />
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      {/* <MovieList movies={movies} /> */}
    </div>
  );
}
