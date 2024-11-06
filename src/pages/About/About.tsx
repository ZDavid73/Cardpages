import Profile from "../../components/Profile/Profile";
import { Tittle, Text } from "../../theme/styledcomponents";
import Footer from "../../components/Footer/Footer";
import HeaderAbout from "../../components/HeaderAbout/HeaderAbout";
import './About.css';
const AboutPage = () => {
    
    return (
        <>
        <div className="About-sectionheader">
        <Profile/>
        <HeaderAbout/>
        </div>
        <div className="About Content">
        <div className="Offer">
        <Tittle variant='white'>What We Offer</Tittle>
        </div>
        <div className="Mission">
        <Tittle variant='white'>Our Mission</Tittle>
        </div>
        <div className="Vision">
        <Tittle variant='white'>Our Vision</Tittle>
        </div>
        <div className="Community">
        <Tittle variant='white'>Our Community</Tittle>
        </div>
        </div>
        <Footer/>
        </>
    );
}

export default AboutPage;