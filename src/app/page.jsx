// pages/protected.js
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Page = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return; // Ne rien faire pendant le chargement
        if (!session) router.push('/auth/signin'); // Redirige vers la page de connexion
    }, [session, status]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Page protégée</h1>
            <p>Bienvenue, {session.user.email}!</p>
        </div>
    );
};

export default Page;
