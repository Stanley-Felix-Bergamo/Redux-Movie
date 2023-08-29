//React
import { BrowserRouter } from 'react-router-dom';

//Routes
import Rotas from './rotas';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Rotas />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
