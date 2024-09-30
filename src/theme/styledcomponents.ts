import styled from 'styled-components';
//
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

//Estilo generales inputs
const inputVariants = {
  searchwhite: {
    textColor: '#2D2D2D',
    borderRadious: '20px',
    borderBottom: 'transparent',
    bgColor: '#ffffff',
    width: '90%',
    fWeihgt: 'normal',
    fSize: '24px',
  },
  searchgray: {
    textColor: '#ffffff',
    borderRadious: '20px',
    borderBottom: 'transparent',
    bgColor: '#2D2D2D',
    width: '90%',
    fWeihgt: 'normal',
    fSize: '24px',
  },
  boxwhite: {
    textColor: '#2D2D2D',
    borderRadious: '10px',
    borderBottom: 'transparent',
    bgColor: '#ffffff',
    width: '70%',
    fWeihgt: 'normal',
    fSize: '24px',
  },
  borderpurple: {
    textColor: '#ffffff',
    borderRadious: '20px',
    borderBottom: '2px solid #a71fd0',
    bgColor: '#2D2D2D',
    width: '70%',
    fWeihgt: 'semi-bold',
    fSize: '32px',
  },
};

export const Input = styled.input<{ variant: 'searchwhite' | 'searchgray' | 'boxwhite' | 'borderpurple' }>`
  width: ${(props) => inputVariants[props.variant].width};
  padding: 10px 20px;
  margin: 15px;
  border-radius: ${(props) => inputVariants[props.variant].borderRadious};
  border: none;
  border-bottom: ${(props) => inputVariants[props.variant].borderBottom};
  background-color: ${(props) => inputVariants[props.variant].bgColor};
  color: ${(props) => inputVariants[props.variant].textColor};
  font-family: 'Sora', sans-serif;
  font-size: ${(props) => inputVariants[props.variant].fSize};  
  font-weight: ${(props) => inputVariants[props.variant].fWeihgt}; 

  & input:focus{
  outline: 2px solid #a71fd0;
}
`

// Estilos generales de texto
const textVariants = {
  white: {
    textColor: '#ffffff',
  },
  purple: {
    textColor: '#a71fd0',
  },
  green: {
    textColor: '#40C485',
  },
};

export const Tittle = styled.h1<{ variant: 'white' | 'purple' }>`
  color: ${(props) => textVariants[props.variant].textColor}; 
  text-align:left;
  margin-bottom: 20px;
  font-family: 'Sora', sans-serif;
  font-size: 32px;
  font-weight: 600;
`;

export const Text = styled.p<{ variant: 'white' | 'purple' }>`
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

export const div = styled.div<{ variant: 'bigopacity' | 'smallopacity' | 'big' | 'small' }>`
  padding: ${(props) => divVariants[props.variant].padding};
  background-color: ${(props) => divVariants[props.variant].backgroundColor};
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: ${(props) => divVariants[props.variant].marginBottom};
`;
