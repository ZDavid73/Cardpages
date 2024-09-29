
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
export const ButtonPurple = styled.button`
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  color: #fff;
  background-color: #a71fd0;
  border: none;
  border-radius: 10px 20px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 10px;

  &:hover {
    background-color: #7f00a5;
  }
`;

export const Button = styled.button<{ variant: 'purple' | 'gray' | 'green' | 'white' }>`
  font-family: 'Sora', sans-serif;
  font-size: 16px;
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

// Estilos generales de títulos
export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
  text-align: center;
`;

// Estilos generales de texto
export const Text = styled.p`
  font-size: 16px;
  font-family: 'Sora', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
  line-height: 1.5;
`;

// Estilos generales para secciones
export const Section = styled.section`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.bgSection};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
`;

// Estilos generales para imágenes
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

// Contenedores genéricos (divs)
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

