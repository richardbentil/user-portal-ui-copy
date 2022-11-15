import { IRegisterInfo } from "../../models/userModel";
export const emailRegex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;

////
export function validateAccountRegisterInfo(info: IRegisterInfo) {
  if (!emailRegex.test(info.email)) {
    throw "Invalid Email Address";
  }
  if (info.company.length <= 0) {
    throw "Company Name Required";
  }
  if (info.password.length <= 0) {
    throw "Password Required";
  }
}
