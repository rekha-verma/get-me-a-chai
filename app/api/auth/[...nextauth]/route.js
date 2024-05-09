import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/app/models/User";
import connectDB from "@/app/db/connectDb";


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === "github") {
                // connect to database
                await connectDB();
                // check if user exist in DB
                const currentUser = await User.findOne({ email: user.email });
                if (!currentUser) {
                    const newUser = new User({
                        email: user.email,
                        username: user.name,
                    })
                    await newUser.save();
                    user.username = newUser.username;
                } else {
                    user.username = currentUser.username;
                }
                return true;

            }
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }