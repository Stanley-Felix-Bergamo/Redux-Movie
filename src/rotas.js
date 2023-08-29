//React
import { Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/Home/index';
import MovieDetail from './pages/MovieDetail/index';
import NotFound from './pages/NotFound/index';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/movie/:imdbID" element={<MovieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Rotas;
