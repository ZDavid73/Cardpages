// Botón genérico
const Button = styled.button`
  background-color: ${(props) => props.bgColor || "#6a5acd"}; 
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.bgColor || "#6a5acd"};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#483D8B"};
    transform: translateY(-2px); 
  }
`;

// Hero Section 
const HeroSection = styled.section`
  background-color: #000;
  color: white;
  padding: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  & > img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
  }
`;

// Sección para las cartas HOME
const CardsSection = styled.section`
  background-color: #121212;
  padding: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;

  & > img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

// Estilo para el h1 HOME
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`;

// Contenedor del Header (Login/Register)
const Header = styled.header`
  background-color: #333;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    color: white;
    font-family: 'Arial';
  }
`;

// Estilo del logo
const Logo = styled.div`
  font-size: 1.5em;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;



