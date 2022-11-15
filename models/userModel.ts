export default interface UserModel {}

export interface IRegisterInfo {
  company: string;
  password: string;
  email: string;
}

export const registerInfo: IRegisterInfo = {
  company: "",
  password: "",
  email: "",
};

export interface ILoginInfo {
  email: string;
  password: string;
}

export const loginInfo: ILoginInfo = {
  email: "",
  password: "",
};
