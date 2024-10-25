// pages/api/login.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Remplacez cette logique par votre méthode de validation
        if (email === 'test@example.com' && password === 'password') {
            res.status(200).json({ email });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
