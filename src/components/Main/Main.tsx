import { useEffect, useState } from 'react';
import UsersWrapper from '../UsersWrapper/UsersWrapper';
import { StyledMain, Subtitle } from './styles';
import { Result, Users } from './typings';

const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState<Result[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then(
        (data: Users) => {
          const users: Result[] = data.results;
          setIsLoaded(true);
          setUsers(users);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <StyledMain id="main">
        <>
          <Subtitle>
            <strong>Person</strong> Wealth
          </Subtitle>
          <ul>
            {users.map((user) => (
              <li key={user.id.value}>
                {user.name.first} {user.name.last}
              </li>
            ))}
          </ul>
          <UsersWrapper />
        </>
      </StyledMain>
    );
  }
};

export default Main;
