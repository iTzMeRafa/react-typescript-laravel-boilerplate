export interface IUserInfoInterface {
  id: number | null;
  name: string | null;
  email: string | null;
  isLoggedIn: boolean;
  csrf_token: string;
}

export interface IUserStoreInterface {
  user: IUserInfoInterface;
}