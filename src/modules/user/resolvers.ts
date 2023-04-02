import { LoginInput, SignUpInput } from "./types";
import UserModel from "../../models/user.ts";

export const resolvers = {
  Query: {
    users: () => UserModel.find({}),
    login: async (parent: any, args: { user: LoginInput }) => {
      const recordFound = await UserModel.findOne({
        email: args.user.email,
        password: args.user.password,
      });
      const newRecord = {
        id: recordFound?.id,
        firstName: recordFound?.firstName,
        lastName: recordFound?.lastName,
        email: recordFound?.email,
        isLoggedIn: true,
      };
      return newRecord;
    },
  },
  Mutation: {
    signup: async (parent: any, args: { user: SignUpInput }) => {
      try {
        const userAlreadyExist = await UserModel.findOne({
          email: args.user.email,
        });
        if (!userAlreadyExist) {
          const userInstance = new UserModel({ ...args.user });
          const result = await userInstance.save();
          return result;
        } else {
          return userAlreadyExist;
        }
      } catch (error) {
        console.log("error ", error);
      }
    },
  },
};
