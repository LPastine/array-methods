import { Wrapper } from './styles';

interface AppWrapper {
  children: React.ReactNode;
}

const Container: React.FC<AppWrapper> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
