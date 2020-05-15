export interface AuthReducerState {
  loading: boolean;
  user: object;
}

export interface LoginInfo {
  email: string;
  password: string;
}

export interface LoginAction extends LoginInfo {
  type: string;
}
