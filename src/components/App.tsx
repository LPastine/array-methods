import { createContext, useReducer, useState } from 'react';
import AppWrapper from './AppWrapper';
import ButtonWrapper from './ButtonWrapper';
import Container from './Container';
import Main from './Main';
import Title from './Title';

interface Users {
  users: User[];
}

interface User {
  name: string;
  money: number;
}

interface InitialUsersContextState {
  users: User[];
}

const initalState: InitialUsersContextState = {
  users: [
    {
      name: '',
      money: 0,
    },
  ],
};

type ACTIONTYPE = { type: 'ADD_USER'; payload: User };

// function appReducer(state: any, action: ACTIONTYPE) {
//   switch (action.type) {
//     case 'ADD_USER': {
//       return [
//         ...state,
//         {
//           action.payload
//         }
//       ]

//   }
// }

export const App = () => {
  return (
    <>
      {/* <UsersContext.Provider value={{ users, setUsers }}> */}
      <AppWrapper>
        <Title />
        <Container>
          <ButtonWrapper />
          <Main />
        </Container>
      </AppWrapper>
      {/* </UsersContext.Provider> */}
    </>
  );
};
