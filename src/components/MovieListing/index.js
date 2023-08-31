import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/index';
import Slider from 'react-slick';
import './styles.scss';
import { Settings } from '../../commom/settings';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movies-container">
          <Slider {...Settings}>
            {movies.Search ? (
              movies.Search.map((movie) => (
                <MovieCard key={movie.imdbID} data={movie} />
              ))
            ) : (
              <div className="movies-error">
                <h3>{movies.Error}</h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movies-container">
          <Slider {...Settings}>
            {shows.Search ? (
              shows.Search.map((show) => (
                <MovieCard key={show.imdbID} data={show} />
              ))
            ) : (
              <div className="movies-error">
                <h3>{shows.Error}</h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
