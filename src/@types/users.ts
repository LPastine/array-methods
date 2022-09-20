export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Add = 'ADD_USER',
}

export type UserType = {
  name: string;
  money: number;
}

export type InitialStateType = {
  users: UserType[];
}

export type UserPayload = {
  [Types.Add] : {
    name: string;
    money: number;
  };
}

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];
