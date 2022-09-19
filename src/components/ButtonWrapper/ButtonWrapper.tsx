import { Aside } from './styles';

import {
  AddUser,
  CalculateWealth,
  DoubleMoney,
  ShowMillionaires,
  Sort,
} from '../buttons';

const ButtonWrapper = () => {
  return (
    <Aside>
      <AddUser />
      <DoubleMoney />
      <ShowMillionaires />
      <Sort />
      <CalculateWealth />
    </Aside>
  );
};

export default ButtonWrapper;
