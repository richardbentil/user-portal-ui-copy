import { createAsyncThunk } from "@reduxjs/toolkit";
import controller from "../../controller";
import UserModel from "../../models/userModel";

const authThunk = createAsyncThunk("authentication/thunk", async () => {
  try {
    return await controller<UserModel>({});
  } catch (error) {
    throw error;
  }
});

export default authThunk;
