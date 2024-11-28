import './HeaderDash.css';
import { Tittle, Container} from '../../theme/styledcomponents'; 

const HeaderDashboard = () => {
    
    return (
        <>
        <div
        className="dashboard-image"
        style={{
          backgroundImage: 'url(https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Header%20Images/il_fullxfull.4040670556_45s1.webp)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px',
        }}>
            <Container variant="smallopacity" className='HeaderDashboard-div'>
                <Tittle variant='white'>Uncover the stories behind each card and explore their unique details.</Tittle>   
            </Container>
            
        </div>
        </>
    );
}

export default HeaderDashboard;