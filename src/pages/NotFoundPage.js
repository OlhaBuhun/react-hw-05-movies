import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <b>
        Sorry! Error! Please use this <Link to="/">Home</Link> to navigate to
        home page
      </b>
    </div>
  );
}
