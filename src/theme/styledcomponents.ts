
//
// Estilos generales de botones
const buttonVariants = {
  purple: {
    bgColor: '#a71fd0',
    textColor: '#fff',
    hoverColor: '#7f00a5',
    padding: '10px 20px',
  },
  gray: {
    bgColor: '#2D2D2D',
    textColor: '#fff',
    hoverColor: '#a71fd0',
    padding: '10px 20px',
  },
  green: {
    bgColor: '#40C485',
    textColor: '#fff',
    hoverColor: '#008f4a',
    padding: '10px 20px',
  },
  white: {
    bgColor: '#ffffff',
    textColor: '#000000',
    hoverColor: '#898989',
    padding: '10px 30px',
  },
};

export const Button = styled.button<{ variant: 'purple' | 'gray' | 'green' | 'white' }>`
  font-family: 'Sora', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => buttonVariants[props.variant].textColor};
  background-color: ${(props) => buttonVariants[props.variant].bgColor};
  border: none;
  border-radius: 10px;
  padding: ${(props) => buttonVariants[props.variant].padding};
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 10px;

  &:hover {
    background-color: ${(props) => buttonVariants[props.variant].hoverColor};
  }
`;

// Estilos generales de textoHome
export const TextHome = styled.p`
  color: #ffffff; 
  text-align:left;
  margin-bottom: 20px;
  font-family: 'Sora', sans-serif;
  font-size: 50px;
  font-weight: bold

  &:hover {
    background-color: #a71fd0;
  }
`;

// Estilos generales de texto
export const Tittle = styled.h1`
  color: #ffffff; 
  text-align:left;
  margin-bottom: 32px;
  font-family: 'Sora', sans-serif;
  font-size: 30px;
  font-weight: 600;
`;

export const Text = styled.p`
  color: #ffffff; 
  text-align:left;
  margin-bottom: 24px;
  font-family: 'Sora', sans-serif;
  font-size: 20px;
  font-weight: normal;

  &:hover {
    background-color: #a71fd0;
  }
`;
