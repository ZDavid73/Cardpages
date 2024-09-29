
// Home Navbar container
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  padding: 20px;
`;

// Logo
const Logo = styled.div`
  font-size: 1.5em;
  color: white;
  font-weight: bold;
`;

// Buttons for login and register
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#6a5acd" : "#4b0082")}; 
  color: white;
  font-size: 0.9em;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => (props.primary ? "#483D8B" : "#8A2BE2")};
  }
`;
//Home hero section
const HeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-image: url('image.jpg'); /* Reemplazar*/
  background-size: cover;
  height: 600px;
  color: white;
`;

const TextHero = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  max-width: 450px;
  border-radius: 10px;

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
`;

export const ExploreButton = styled.button`
  background-color: #32cd32;
  color: white;
  font-size: 1em;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #228b22;
  }
`;


