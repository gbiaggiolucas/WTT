document.getElementById("confirm").addEventListener("click", function() {
    const email = document.getElementById("email").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    const errorElement = document.getElementById("error-message");
    
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
        console.log("Todos os campos estão preenchidos corretamente.");
        window.location.href = "signin.html";
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