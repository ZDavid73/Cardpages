import './Footer.css';
import { FaDiscord, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Text } from '../../theme/styledcomponents';

const Footer: React.FC = () => {
  return (
    <div className='footerContainer'>
      <ol className='footerIcons' aria-label="Social Media Links">
        <li>
          <a href="https://discord.com" aria-label="Follow us on Discord">
            <FaDiscord className="footerIcon" color="#ffffff" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" aria-label="Follow us on Instagram">
            <FaInstagram className="footerIcon" color="#ffffff" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" aria-label="Follow us on Facebook">
            <FaFacebook className="footerIcon" color="#ffffff" />
          </a>
        </li>
        <li>
          <a href="https://x.com/home?lang=es" aria-label="Follow us on X">
            <FaTwitter className="footerIcon" color="#ffffff" />
          </a>
        </li>
      </ol>
      <Text variant='white' className='footerText'>Copyright © 2024 Capsule Corp Inc.</Text>
    </div>
  );
};

export default Footer;