import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/index';
import './styles.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movies-container">
          {movies.Search ? (
            movies.Search.map((movie) => (
              <MovieCard key={movie.imdbID} data={movie} />
            ))
          ) : (
            <div className="movies-error">
              <h3>{movies.Error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
