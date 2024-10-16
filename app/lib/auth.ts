import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/prisma/db";

export const authOptions = {
      providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            clgId: { label: "College ID", type: "number", placeholder: "Enter College ID" },
            password: { label: "Password", type: "password", placeholder: "Enter Password" },
          },
          async authorize(credentials: Record<"clgId" | "password", string> | undefined) {
            
            if(!credentials?.clgId || !credentials.password){
              return null;
            }
    
            const clgId = Number(credentials.clgId);
    
            const user = await db.user.findFirst({
              where: {
                clgId,
                password: credentials?.password
              }
            })
    
            console.log(user);
    
            if (user) {
              return { 
                id: user.name as string,
                clgId: user.clgId,
                role: user.role
               };
            }
            return null; 
          },
        }),
      ],
      secret: process.env.NEXTAUTH_SECRET || "kalyan",
      pages: {
        signIn: "/auth/signin",
      },
}