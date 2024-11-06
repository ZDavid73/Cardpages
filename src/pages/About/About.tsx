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
        <Text variant='white'>
        At Capsule Corp, our services are designed to provide a complete experience for card game enthusiasts:
    </Text>
    <ul>
        <li>
            <Text variant='white'>
                <strong>Secure Card Trading:</strong> A dynamic marketplace where users can safely buy, sell, and trade cards, ensuring reliable and efficient transactions.
            </Text>
        </li>
        <li>
            <Text variant='white'>
                <strong>Deck Builder:</strong> Intuitive tools that allow users to create and optimize their favorite decks, helping them refine their strategies and share them with other players.
            </Text>
        </li>
        <li>
            <Text variant='white'>
                <strong>Tournament Organization:</strong> Advanced features to organize both local and online tournaments, with ranking systems, scheduling, and management tools that make events smooth and exciting.
            </Text>
        </li>
    </ul>
        </div>
        <div className="Mi-Vi">
        <div className="Mission">
        <Tittle variant='white'>Our Mission</Tittle>
        <Text variant='white'>At Capsule Corp, we are dedicated to creating a digital space where the passion for Trading Card Games (TCG) comes to life. We believe in connecting people through their love for collectible cards, offering a platform where players and collectors from around the world can trade, compete, and share within a vibrant and ever-growing community.</Text>
        </div>
        <div className="Vision">
        <Tittle variant='white'>Our Vision</Tittle>
        <Text variant='white'>We aim to be the go-to destination for TCG enthusiasts. Whether you're a collector seeking that rare card, a competitive player optimizing your decks, or a tournament organizer looking to elevate the level of competition, Capsule Corp is the place where it all happens. We strive to unite people of all experience levels, helping to make each interaction meaningful and enjoyable.</Text>
        </div></div>
        <div className="Community">
        <Tittle variant='white'>Our Community</Tittle>
        <Text variant='white'>Our audience ranges from casual collectors to competitive players looking to take their game to the next level. But Capsule Corp isn't just for players; we also support tournament organizers, influencers, and anyone looking to contribute to the growth of the TCG community. We believe in the strength of our community, where every interaction fosters a sense of belonging and connection.</Text>
        </div>
        </div>
        <Footer/>
        </>
    );
}

export default AboutPage;