import {Container, Tittle} from '../../theme/styledcomponents';
import './HeaderAbout.css'

const HeaderAbout = () => {
    return (
      <div className='aboutcompany-header'>
        <div className='aboutcompany-image' 
         style={{
            backgroundImage: `url('https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Header%20Images/Group%20128.png')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '52.8vh',
            borderRadius: '10px',
          }}
          ></div>
        <Container variant='small' className='usercompany'>
            <Tittle variant='white'>Capsule corp Inc. </Tittle>
        </Container>
      </div>
    );
  };
  
  export default HeaderAbout;