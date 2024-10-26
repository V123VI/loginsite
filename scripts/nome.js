// Obtém o email do localStorage
const usuarioEmail = localStorage.getItem("usuarioEmail"); // Pega o email armazenado

// Se o email existir, exibe na página
const iddolocalondeficaousuario = document.getElementById('lugarusuario');

if (usuarioEmail) {
    iddolocalondeficaousuario.innerText = usuarioEmail; // Atualiza o elemento com o email
} else {
    iddolocalondeficaousuario.innerText = "Usuário não econtrado"; // Exibe "Usuário" se não houver email
}
