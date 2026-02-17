import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      const [admin] = await db
        .select()
        .from(adminUsers)
        .where(eq(adminUsers.email, user.email))
        .limit(1);
      return !!admin;
    },
    async session({ session }) {
      if (session.user?.email) {
        const [admin] = await db
          .select()
          .from(adminUsers)
          .where(eq(adminUsers.email, session.user.email))
          .limit(1);
        if (admin) {
          (session.user as unknown as Record<string, unknown>).role = admin.role;
        }
      }
      return session;
    },
  },
});
