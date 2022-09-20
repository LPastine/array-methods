import {
  AppWrapper,
  ButtonWrapper,
  Container,
  Main,
  Title,
} from './components';
import { AppProvider } from './context/usersContext';

export const App = () => {
  return (
    <>
      <AppProvider>
        <AppWrapper>
          <Title />
          <Container>
            <ButtonWrapper />
            <Main />
          </Container>
        </AppWrapper>
      </AppProvider>
    </>
  );
};
