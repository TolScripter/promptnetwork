import User from '@/models/users';
import { connectToDB } from '@/utils/database';
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({user, account}){
            if(account.provider === "google"){
                const {name, email} = user;
                await connectToDB();
                const userExists = await User.findOne({email});
                if (!userExists) {
                    await User.create({name, email});
                }
                return user;
            }
        },
        async session({session}){
            const { email } = session.user;
            await connectToDB();
            const user = await User.findOne({email});
            session.user.id = user._id;
            return session;
        }
    }
}

const handler = NextAuth(authOptions)
export {handler as POST, handler as GET}