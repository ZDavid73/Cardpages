import { Link } from 'react-router-dom';
import './Advertisement.css'
import { Tittle } from '../../theme/styledcomponents';

function Advertisement() {
  
  return (
    <div className='HomePageAnouncement'>
        <Link to="/register" aria-label="Ir a registrarse">
            <Tittle variant='white'>Create an account to start enjoying</Tittle>
        </Link>
    </div>
  );
}

export default Advertisement;