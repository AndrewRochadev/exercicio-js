document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos A e B
    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);

    // Verifica se B é maior que A
    if (campoB > campoA) {
        // Se for válido, exibe mensagem de sucesso
        document.getElementById('mensagem').textContent = 'Formulário válido!';
        document.getElementById('mensagem').classList.remove('error');
        document.getElementById('mensagem').classList.add('success');
    } else {
        // Se for inválido, exibe mensagem de erro
        document.getElementById('mensagem').textContent = 'Campo B deve ser maior que o Campo A.';
        document.getElementById('mensagem').classList.remove('success');
        document.getElementById('mensagem').classList.add('error');
    }
});