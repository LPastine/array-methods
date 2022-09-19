import { StyledContainer } from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};

export default Container;
