import { fetchReviewsMovie } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsMovie() {
      try {
        const { results } = await fetchReviewsMovie(movieId);
        setReviews(results);
      } catch (error) {
        toast.error(
          'Opps! Somathing went wrong! Please try reloading this page'
        );
      }
    }
    getReviewsMovie();
  }, [movieId]);

  if (!reviews) return;

  return (
    <section>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </section>
  );
};

export default Reviews;
