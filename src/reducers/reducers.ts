import { UserActions, UserType } from "../@types/users";

export const userReducer = (state: UserType[], action: UserActions) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          name: action.payload.name,
          money: action.payload.money,
        }
      ]
    // case 'DELETE_PRODUCT':
    //   return [
    //     ...state.filter(product => product.id !== action.payload.id),
    //   ]
    default:
      return state;
  }
}
