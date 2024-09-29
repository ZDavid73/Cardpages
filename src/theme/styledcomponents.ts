import styled from 'styled-components';
//HOMEEE
// Estilos generales de botones
export const Button = styled.button`
  padding: 0.75em 1.5em;
  font-size: 16px;
  font-family: 'Sora', sans-serif;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bg};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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

