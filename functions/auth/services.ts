import { IRegisterInfo } from "../../models/userModel";
export const emailRegex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
////
export function validateAccountRegisterInfo(info: IRegisterInfo) {
  if (!emailRegex.test(info.email)) {
    throw { message: "Invalid Email Address", name: "email" };
  }
  if (info.company.length <= 0) {
    throw { message: "Company Name Required", name: "company" };
  }
  if (!passwordRegex.test(info.password)) {
    throw {
      message:
        "password invalid,minimum  6-characters required, at least one uppercase letter, one lowercase letter, one number and one special character:",
      name: "password",
    };
  }
}
