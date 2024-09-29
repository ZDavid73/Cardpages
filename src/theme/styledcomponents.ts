
// Navbar container
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


