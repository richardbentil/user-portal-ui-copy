import Axios from "axios";

export interface IControllerProps {
  url?: string;
  baseURL?: string;
  data?: any;
  token?: string;
  method?: "put" | "patch" | "get" | "post" | "delete";
  isFile?: boolean;
}

export default function <T>({
  url,
  method,
  token,
  data,
  isFile,
  baseURL,
}: IControllerProps) {
  return new Promise<T>((resolve, reject) => {
    try {
      Axios({
        baseURL: baseURL ? baseURL : "",
        url,
        data,
        method: method ? method : "get",
        headers: {
          contentType: isFile ? "multipart/form-data" : "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => resolve(response.data as T))
        .catch((error) =>
          reject(error?.response?.data || error?.message || error)
        );
    } catch (error) {
      reject(error);
    }
  });
}
