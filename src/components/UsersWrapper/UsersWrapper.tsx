import { useContext } from 'react';
import { Types } from '../../@types/users';
import { UsersContext } from '../../context/usersContext';

const UsersWrapper = () => {
  const { state, dispatch } = useContext(UsersContext);

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
            payload: {
              name: 'Test 1',
              money: 100000,
            },
          });
        }}
      >
        click
      </button>
      <ul>
        {state.users.map((user, index) => (
          <li key={index}>
            {user.name}
            {user.money}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersWrapper;
