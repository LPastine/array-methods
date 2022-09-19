import AppWrapper from './AppWrapper';
import ButtonWrapper from './ButtonWrapper';
import Container from './Container';
import Main from './Main';
import Title from './Title';

export const App = () => {
  return (
    <>
      <AppWrapper>
        <Title />
        <Container>
          <ButtonWrapper />
          <Main />
        </Container>
      </AppWrapper>
    </>
  );
};
