//React
import { Link } from 'react-router-dom';

//images
import user from '../../images/user.png';

//styles
import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Redux Movie</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
