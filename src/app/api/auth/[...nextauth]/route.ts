import { UserLoginType } from "./../../../../@types/UserLogin";
import User from "@/schema/User";
import { connect } from "@/services/db";
import bcrypt from "bcryptjs";

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const options = NextAuth({
  providers: [
    CredentialsProvider({
      id: "Credentials",
      name: "Credentials",
      async authorize(credentials: UserLoginType) {
        await connect();

        try {
          const user: UserLoginType | null = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const validPassword = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (validPassword) {
              return user;
            } else {
              throw new Error("Credenciais erradas!");
            }
          } else {
            throw new Error("Credenciais erradas!");
          }
        } catch (err) {
          throw new Error(err as string).message;
        }
      },
    }),
  ],

  pages: {
    error: "/auth/login",
  },
});

export { options as GET, options as POST };
