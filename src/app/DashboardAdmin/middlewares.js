// pages/api/auth/verifyToken.js
import jwtDecode from 'jwt-decode';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
          return res.status(401).json({ message: 'No token provided' });
        }

        const decodedToken = jwtDecode(token);
        const { role } = decodedToken; // Asegúrate de que 'role' exista en el token decodificado

        if (!role ||!['SUPER_ADMIN'].includes(role)) {
          return res.status(403).json({ message: 'Forbidden: User is not a Super Admin' });
        }

        res.status(200).json({ message: 'Access granted', data: decodedToken }); // Devuelve toda la información decodificada si es necesario
      } catch (error) {
        res.status(500).json({ message: 'Error verifying token', error });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
