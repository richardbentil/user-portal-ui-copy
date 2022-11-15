import { IAuthReducerState, IResponseReducerState } from "./IState";

export const AuthReducerState: IAuthReducerState = {
  user: null,
};

export const ResponseReducerState: IResponseReducerState = {
  loading: false,
  error: null,
  message: null,
};
