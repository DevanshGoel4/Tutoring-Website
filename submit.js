
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        console.log({ name, email, subject, message });


        res.status(200).json({ message: 'Form submitted successfully!' });
    } else {

        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
