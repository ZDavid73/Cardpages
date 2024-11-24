import './Header.css';
import { Container, Tittle } from '../../theme/styledcomponents';
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";

interface HeaderProps {
  backgroundImageUrl: string; 
}

const Header = ({ backgroundImageUrl }: HeaderProps) => {
  const user = useSelector((state: AppState) => state.user);

  return (
    <div className="calatogues-header">
      <div
        className="catalogues-image"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '50vh',
          borderRadius: '10px',
        }}
      ></div>
      <Container variant="small" className="username-calatogues">
        <Tittle variant="white" className="username-headers">
          {user.username}'s catalogue
        </Tittle>
        <Tittle variant="purple" className="number-of-sales">0 sales</Tittle>
      </Container>
    </div>
  );
};

export default Header;
