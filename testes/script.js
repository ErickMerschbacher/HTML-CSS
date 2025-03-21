let touchCount = 0;

// Selecionando elementos
const touchCountElement = document.getElementById('touchCount');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');

// Função para incrementar o contador
function incrementTouchCount() {
    touchCount++;
    touchCountElement.textContent = touchCount;
}

// Função para resetar o contador
function resetTouchCount() {
    touchCount = 0;
    touchCountElement.textContent = touchCount;
}

// Adicionando eventos aos botões
incrementButton.addEventListener('click', incrementTouchCount);
resetButton.addEventListener('click', resetTouchCount);