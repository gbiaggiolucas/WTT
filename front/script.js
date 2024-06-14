document.getElementById("confirm").addEventListener("click", async function() {
    let email = document.getElementById("email").value.trim();
    let nome = document.getElementById("nome").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    let errorElement = document.getElementById("error-message");
    
    errorElement.innerHTML = "";

    if (email === "") {
        errorElement.innerHTML += "<br>O campo email é obrigatório.<br>";
    } else if (nome === "") {
        errorElement.innerHTML += "<br>O campo nome é obrigatório.<br>";
    } else if (senha === "") {
        errorElement.innerHTML += "<br>O campo senha é obrigatório.<br>";
    } else if (confirmarsenha === "") {
        errorElement.innerHTML += "<br>O campo confirmar senha é obrigatório.<br>";
    } else if (senha !== confirmarsenha) {
        errorElement.innerHTML += "<br>As senhas não coincidem.<br>";
    } else if (errorElement.innerHTML === "") {
        let data = {email, nome, senha};

        const response = await fetch("http://localhost:3001/api/store/task", {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        let content = await response.json();

        if (content.success) {
            window.location.href = "signin.html";
        } else {
            alert("algo deu errado!");
        } 
    }
});


document.getElementById("login").addEventListener("click", function() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    let errorMessage = "";

    if (email === "") {
        errorMessage += "<br>O campo email é obrigatório.<br>";
    }
    if (senha === "") {
        errorMessage += "<br>O campo senha é obrigatório.<br>";
    }

    const errorElement = document.getElementById("error-message");
    if (errorMessage) {
        errorElement.innerHTML = errorMessage;
    } else {
        errorElement.innerHTML = "";
        
        console.log("Todos os campos estão preenchidos corretamente.");
    }
});

document.getElementById("signup").addEventListener("click", function () {
    window.location.href = "signup.html";
});

document.getElementById("signin").addEventListener("click", function () {
    window.location.href = "signin.html";
})