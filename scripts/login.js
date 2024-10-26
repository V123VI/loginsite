const inputemail = document.getElementById('lugar-email');
const inputsenha = document.getElementById('lugar-senha');
const botaologar = document.getElementById('botao-logar');

botaologar.addEventListener("click", () => {
    const email = inputemail.value;
    const senha = inputsenha.value;

    if (email && senha) {
        localStorage.setItem('usuarioEmail', email); // Armazena o email
        window.location.href = './home.html'; // Redireciona para home.html
    } else {
        alert('Preencha os campos'); // Alerta se os campos não forem preenchidos
    }
});
