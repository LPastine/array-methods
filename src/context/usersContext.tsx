import { createContext, Dispatch, useReducer } from 'react';
import { InitialStateType, UserActions } from '../@types/users';
import { userReducer } from '../reducers/reducers';

const initialState = {
  users: [],
};

const UsersContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<UserActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ users }: InitialStateType, action: UserActions) => ({
  users: userReducer(users, action),
});

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, AppProvider };
