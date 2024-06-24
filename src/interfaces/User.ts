export interface IUser {
  id: string;
  username: string;
  verified: string;
  email: string;
  created: string;
  updated: string;
  avatar: string;
}

export interface IUserUpdate {
  username: string;
  email: string;
  avatar: string;
  password: string;
  passwordConfirm: string;
}