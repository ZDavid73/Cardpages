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
        <Text variant='white'>At Capsule Corp, our services are designed to provide a complete experience for card game enthusiasts: Secure Card Trading: A dynamic marketplace where users can safely buy, sell, and trade cards, ensuring reliable and efficient transactions. Deck Builder: Intuitive tools that allow users to create and optimize their favorite decks, helping them refine their strategies and share them with other players. Tournament Organization: Advanced features to organize both local and online tournaments, with ranking systems, scheduling, and management tools that make events smooth and exciting.</Text>
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