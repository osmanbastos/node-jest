import { database } from '../database.js';

const usersController = {
    criarUsuario (req, res) {
        const { name } = req.body;
    
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
    
        database.push(name);
        return res.status(201).json({ message: `User ${name} created successfully` });
    },

    lerUsuarios (req, res) {
        return res.status(200).json(database);
    }
}

export { usersController };