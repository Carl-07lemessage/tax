
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Ajoutez ici votre logique pour enregistrer l'utilisateur dans la base de données

        res.status(201).json({ message: 'User created' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
