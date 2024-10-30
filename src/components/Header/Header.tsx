import './Header.css'
import {Container, Tittle, Text} from '../../theme/styledcomponents';

const Header = () => {
    return (
      <div className='calatogues-header'>
        <div className='catalogues-image' 
         style={{
            backgroundImage: `url('https://todaysparent.mblycdn.com/tp/resized/2016/06/1600x900/pokemon-101-1280x960.jpg')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '50vh',
            borderRadius: '10px',
          }}
          ></div>
        <Container variant='small' className='username-calatogues'>
            <Tittle variant='white'>Valentina's catalogue</Tittle>
            <Text variant='purple' className='number-of-sales'>0 sales</Text>
        </Container>
      </div>
    );
  };
  
  export default Header;