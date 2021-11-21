export interface Message {
  message: string;
}
export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}
export interface IAuthService {
  addNewUser(userEntity: IUser): void;
  loginUser(): IUser | undefined;
}
export interface IMusic {
  id: number;
  title: string;
  year: number;
  author: string;
  genre: string;
  album: string;
}
