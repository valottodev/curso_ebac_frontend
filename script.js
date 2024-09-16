const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const campoA = document.getElementById('A');
    const campoB = document.getElementById('B');
    
    if (campoB.value > campoA.value) {
        alert('formulário válido!')
    } else {
        alert('formulário inválido!')
    }
    campoA.value = '';
    campoB.value = '';
})