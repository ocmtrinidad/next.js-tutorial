import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const options = {
  // Using Github and Google as authentication providers
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // Create session based on the profile information
      profile(profile) {
        // Use a database query in production.
        let userRole = "GitHub User";
        // If the email matches, assign Admin role.
        if (profile?.email === "ocmtrinidad@gmail.com") {
          userRole = "Admin";
        }
        // Return the profile with role field to control access
        return {
          ...profile,
          role: userRole,
        };
      },
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile) {
        let userRole = "Google User";
        // NOT ADMIN FOR TESTING
        if (profile?.email === "1ocmtrinidad@gmail.com") {
          userRole = "Admin";
        }
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
    }),
  ],
  // Adds user role to the token
  callbacks: {
    // Allows for access to the token
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    // Allows for access to the session
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
