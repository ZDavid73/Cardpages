import './Footer.css';
import { FaDiscord, FaInstagram, FaFacebook} from 'react-icons/fa';
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
            <svg xmlns="http://www.w3.org/2000/svg" className="footerIcon" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
            </svg>
          </a>
        </li>
      </ol>
      <Text variant='white' className='footerText'>Copyright © 2024 Capsule Corp Inc.</Text>
    </div>
  );
};

export default Footer;