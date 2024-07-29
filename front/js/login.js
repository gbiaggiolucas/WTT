document.getElementById("login").addEventListener("click", async function () {
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let errorElement = document.getElementById("error-message");

    errorElement.innerHTML = "";

    if (email === "") {
        errorElement.innerHTML += "<br>O campo email é obrigatório.<br>";
    } else if (senha === "") {
        errorElement.innerHTML += "<br>O campo senha é obrigatório.<br>";
    } else {
        let data = {email, senha}

        const response = await fetch("http://localhost:3001/api/login", {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        let content = await response.json();

        if (content.succes) {
            window.location.href = "../html/wtt.html"
        } else {
            errorElement.innerHTML += "<br>Email ou senha incorretos<br>"
        }
    }
})