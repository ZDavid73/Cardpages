import styled from 'styled-components';
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
const textVariants = {
  white: {
    textColor: '#ffffff',
  },
  purple: {
    textColor: '#a71fd0',
  },
};

export const Tittle = styled.h1`
  color: ${(props) => textVariants[props.variant].textColor}; 
  text-align:left;
  margin-bottom: 20px;
  font-family: 'Sora', sans-serif;
  font-size: 32px;
  font-weight: 600;
`;

export const Text = styled.p`
  color: ${(props) => textVariants[props.variant].textColor}; 
  text-align:left;
  font-family: 'Sora', sans-serif;
  font-size: 24px;
  font-weight: normal;

  &:hover {
    background-color: #a71fd0;
  }
`;


// Estilos generales de contenedores (divs)
const divVariants = {
  bigopacity: {
    padding: '30px',
    backgroundColor: 'rgba(16, 15, 15, 0.5)',  
    marginBottom: '30px',
  },
  smallopacity: {
    padding: '20px',
    backgroundColor: 'rgba(16, 15, 15, 0.5)',  
    marginBottom: '20px'
  },
  big: {
    padding: '30px',
    backgroundColor: '#2D2D2D',  
    marginBottom: '30px'
  },
  small: {
    padding: '20px',
    backgroundColor: '#2D2D2D',  
    marginBottom: '20px'
  },
};

export const div = styled.h1`
  padding: ${(props) => divVariants[props.variant].padding};
  background-color: ${(props) => divVariants[props.variant].backgroundColor};
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: ${(props) => divVariants[props.variant].marginBottom};
`;
