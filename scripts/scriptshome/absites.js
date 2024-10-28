const botao = document.getElementById('botaosites');
const dropdown = document.getElementById('dropdown');

botao.addEventListener('click', () => {
    // Alterna a exibição do dropdown
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});
