// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "you@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Remplacez cette logique par votre méthode de validation
                const res = await fetch("http://localhost:3000/api/login", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                    }),
                });
                const user = await res.json();

                // Si l'utilisateur est valide, retourner l'objet utilisateur
                if (res.ok && user) {
                    return user;
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',  // Page de connexion personnalisée
    },
    session: {
        jwt: true,
    },
});
