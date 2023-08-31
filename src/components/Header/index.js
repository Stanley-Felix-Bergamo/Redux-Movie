//React
import { Link } from 'react-router-dom';

//images
import user from '../../images/user.png';

//styles
import './styles.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows
} from '../../features/movies/movieSlice';

const Header = () => {
  const [term, setTerm] = useState();
  const dispath = useDispatch();

  const submitHandler = (e) => {
    if ((term === '') | (term === undefined))
      return alert('O campo está vazio');
    e.preventDefault();
    dispath(fetchAsyncMovies(term));
    dispath(fetchAsyncShows(term));
    setTerm('');
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Redux Movie</Link>
      </div>

      <div className="search-bar ">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={({ target }) => setTerm(target.value)}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
