import {Container, Tittle} from '../../theme/styledcomponents';


const HeaderAbout = () => {
    return (
      <div className='calatogues-header'>
        <div className='catalogues-image' 
         style={{
            backgroundImage: `url('https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Header%20Images/Group%20128.png')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '50vh',
            borderRadius: '10px',
          }}
          ></div>
        <Container variant='small' className='username-calatogues'>
            <Tittle variant='white'>Capsule corp Inc. </Tittle>
        </Container>
      </div>
    );
  };
  
  export default HeaderAbout;