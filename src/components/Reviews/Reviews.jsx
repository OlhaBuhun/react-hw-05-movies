import { fetchReviewsMovie } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ReviewsItem, ReviewsLink } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsMovie() {
      try {
        const { results } = await fetchReviewsMovie(movieId);
        if (results.length === 0) {
          return;
        }
        setReviews(results);
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
      {reviews === null ? (
        <p>We don`t have reviews for this movie</p>
      ) : (
        <ReviewsLink>
          {reviews.map(({ author, content, id }) => (
            <ReviewsItem key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ReviewsLink>
      )}
    </section>
  );
};

export default Reviews;
