export interface LoginInfo {
  email: string;
  password: string;
}

export interface LoginAction extends LoginInfo {
  type: string;
}
