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
        <Tittle variant='white'>What We Offer</Tittle>
        <Tittle variant='white'>Our Mission</Tittle>
        <Footer/>
        </>
    );
}

export default AboutPage;