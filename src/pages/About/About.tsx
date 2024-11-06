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
        <Tittle variant='white'>Our Mission</Tittle>
        <Tittle variant='white'>Our Vision</Tittle>
        <Tittle variant='white'>Our Community</Tittle>
        </div>
        <Footer/>
        </>
    );
}

export default AboutPage;