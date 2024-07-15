const connection = require('../config/db');

async function storeUser(request, response) {

    const params = Array(
        request.body.email,
        request.body.nome,
        request.body.senha
    );

    const query = "INSERT INTO usuario(email, nome, senha) VALUES(?, ?, ?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, sem sucesso :(",
                    data: err
                })
        }
    })
}

async function login(request, response) {
    const email = Array(request.body.email);

    const query = "SELECT email, password FROM users WHERE email = ?";

    connection.query(query, email, (err, results) => {
        if(results.length > 0) {
            const password = request.body.password;
            const passwordQuery = results[0].password;

            if(password === passwordQuery) {
                response
                .status(200)
                .json({
                    succes: true, 
                    message: "Sucesso!",
                    data: results
                })
            } else {
                response
                .status(400)
                .json({
                    success: false,
                    message: "Senha incorreta",
                    data: err
                })
            }
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Email não cadastrado ou incorreto",
                    data: err
                })
        }
    })
}

module.exports = {
    storeUser,
    login
}