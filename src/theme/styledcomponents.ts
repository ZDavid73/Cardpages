import styled from 'styled-components';

// Estilos generales de textoHome
export const TextHome = styled.p`
  color: #ffffff; 
  text-align:left;
  margin-bottom: 20px;
  font-family: 'Sora', sans-serif;
  font-size: 35px;
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 25px;
    margin-bottom: 10px;
    }
`;

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
  font-size: 18px;
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

  @media (max-width: 700px) {
    font-size: 15px;
    padding: 10px 20px;
    margin: 5px;
  }
`;

// Estilo generales inputs
const inputVariants = {
  searchwhite: {
    textColor: '#2D2D2D',
    borderRadius: '20px', 
    borderBottom: 'transparent',
    bgColor: '#ffffff',
    width: '90%',
    fontWeight: 'normal', 
    fontSize: {
      default: '24px',   
      small: '18px',
    } 
  },
  searchgray: {
    textColor: '#ffffff',
    borderRadius: '20px',
    borderBottom: 'transparent',
    bgColor: '#2D2D2D',
    width: '90%',
    fontWeight: 'normal',
    fontSize: {
      default: '24px',   
      small: '18px',
    } 
  },
  boxwhite: {
    textColor: '#2D2D2D',
    borderRadius: '10px',
    borderBottom: 'transparent',
    bgColor: '#ffffff',
    width: '70%',
    fontWeight: 'normal',
    fontSize: {
      default: '24px',   
      small: '18px',
    } 
  },
  borderpurple: {
    textColor: '#ffffff',
    borderRadius: '20px',
    borderBottom: '2px solid #a71fd0',
    bgColor: '#2D2D2D',
    width: '70%',
    fontWeight: '600',
    fontSize: {
      default: '32px',   
      small: '24px',
    }
  },
};

export const Input = styled.input<{ variant: 'searchwhite' | 'searchgray' | 'boxwhite' | 'borderpurple' }>`
  width: ${(props) => inputVariants[props.variant].width};
  padding: 10px 20px;
  margin: 15px;
  border-radius: ${(props) => inputVariants[props.variant].borderRadius};
  border: none;
  border-bottom: ${(props) => inputVariants[props.variant].borderBottom};
  background-color: ${(props) => inputVariants[props.variant].bgColor};
  color: ${(props) => inputVariants[props.variant].textColor};
  font-family: 'Sora', sans-serif;
  font-size: ${(props) => inputVariants[props.variant].fontSize.default};  
  font-weight: ${(props) => inputVariants[props.variant].fontWeight}; 

  &:focus {
    outline: 2px solid #a71fd0;
  }

  @media (max-width: 700px) {
    margin: 10px;
    font-size: ${(props) => inputVariants[props.variant].fontSize.small};
  }
`;

// Estilos generales de texto
const textVariants = {
  white: {
    textColor: '#ffffff',
    fontSize: {
      default: '16px',
      small: '14px',
    }
  },
  purple: {
    textColor: '#a71fd0',
    fontSize: {
      default: '16px',
      small: '14px',
    }
  },
  green: {
    textColor: '#40C485',
    fontSize: {
      default: '16px',
      small: '14px',
    }
  },
  gray: {
    textColor: '#D2D2D2',
    fontSize: {
      default: '16px',
      small: '14px',
    }
  },
};

export const Tittle = styled.h1<{ variant: 'white' | 'purple' }>`
  color: ${(props) => textVariants[props.variant].textColor}; 
  text-align:left;
  margin-bottom: 20px;
  font-family: 'Sora', sans-serif;
  font-size: 32px;
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const Text = styled.p<{ variant: 'white' | 'purple'| 'green' | 'gray' }>`
  color: ${(props) => textVariants[props.variant].textColor}; 
  text-align:left;
  font-family: 'Sora', sans-serif;
  font-size: ${(props) => textVariants[props.variant].fontSize.default};
  font-weight: normal;

  @media (max-width: 700px) {
    font-size: ${(props) => textVariants[props.variant].fontSize.small};
  }
`;
export const TextLogo = styled.p`
  color: #ffffff; 
  text-align:left;
  font-family: 'Fuente Logo', sans-serif;
  font-size: 50px;
  font-weight: normal;

  @media (max-width: 700px) {
    font-size: 40px;
    }
`;
// Estilos generales de contenedores (divs)
const divVariants = {
  bigopacity: {
    padding: {
      default: '30px',   
      small: '20px',
    },
    backgroundColor: 'rgba(16, 15, 15, 0.5)',  
    marginBottom: {
      default: '30px',   
      small: '20px',
    }
  },
  smallopacity: {
    padding: {
      default: '20px',   
      small: '10px',
    },
    backgroundColor: 'rgba(16, 15, 15, 0.5)',  
    marginBottom: {
      default: '20px',   
      small: '10px',
    }
  },
  big: {
    padding: {
      default: '30px',   
      small: '20px',
    },
    backgroundColor: '#2D2D2D',  
    marginBottom: {
      default: '30px',   
      small: '20px',
    }
  },
  small: {
    padding: {
      default: '20px',   
      small: '10px',
    },
    backgroundColor: '#2D2D2D',  
    marginBottom: {
      default: '20px',   
      small: '10px',
    }
  },
};

export const Container = styled.div<{ variant: 'bigopacity' | 'smallopacity' | 'big' | 'small' }>`
  padding: ${(props) => divVariants[props.variant].padding.default};
  background-color: ${(props) => divVariants[props.variant].backgroundColor};
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: ${(props) => divVariants[props.variant].marginBottom.default};

  @media (max-width: 700px) {
    padding: ${(props) => divVariants[props.variant].padding.small};
    margin-bottom: ${(props) => divVariants[props.variant].marginBottom.small};
  }
`;
