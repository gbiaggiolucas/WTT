const connection = require('../config/db');

async function storeTask(request, response) {
    const { email, nome, senha } = request.body;

    const checkEmailQuery = 'SELECT * FROM usuario WHERE email = ?';
    connection.query(checkEmailQuery, [email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            return response.status(400).json({
                success: false,
                message: 'Email already exists'
            });
        } else {
            const insertUserQuery = 'INSERT INTO usuario (email, nome, senha) VALUES (?, ?, ?)';
            connection.query(insertUserQuery, [email, nome, senha], (err, results) => {
                if (err) throw err;
                response.status(201).json({
                    success: true,
                    message: 'User registered successfully',
                    data: results
                });
            });
        }
    });
}

async function loginTask(request, response) {
    const { email, senha } = request.body;

    const query = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    connection.query(query, [email, senha], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            response.json({
                success: true,
                message: 'Login successful'
            });
        } else {
            response.status(400).json({
                success: false,
                message: 'Invalid email or password'
            });
        }
    });
}

module.exports = {
    storeTask,
    loginTask
}
