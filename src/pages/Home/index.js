import MovieListing from '../../components/MovieListing/index';
import movieApi from '../../commom/APIs/index';
import { Key } from '../../commom/APIs/key';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Back to the Future';

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${Key}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('error:', err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
