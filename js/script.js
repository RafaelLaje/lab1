// Função para exibir detalhes sobre os riscos
function showRiskDetails() {
    document.getElementById('riskModal').style.display = 'block';
}

// Função para fechar a caixa de diálogo de riscos
function closeRiskModal() {
    document.getElementById('riskModal').style.display = 'none';
}

// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById('loginForm').addEventListener('submit', function (event) {
    // Pega o valor do campo de token
    const apiToken = document.getElementById('apiToken').value;

    // Verifica se a caixa de consentimento está marcada
    if (!document.getElementById('consentCheck').checked) {
        alert('Por favor, marque a caixa de consentimento para continuar.');
        event.preventDefault(); // Impede o envio do formulário se a caixa de consentimento não estiver marcada
    } else {
        // Verifica o token e redireciona se válido
        if (apiToken === 'RAFAELTESTE') {
            // Simula um alerta visual para "Acesso Permitido"
            showAccessAlert('Acesso Permitido', true);
            
            // Redireciona para a página principal (substitua o URL conforme necessário)
            window.location.href = 'index.html';
        } else {
            // Simula um alerta visual para "Falha na Conexão"
            showAccessAlert('Falha na Conexão. Verifique o Token.', false);
        }

        // Impede o evento padrão do formulário para evitar a reinicialização da página
        event.preventDefault();
    }
});

// Função para mostrar alertas visuais
function showAccessAlert(message, accessGranted) {
    // Cria um elemento de alerta visual dinamicamente
    const alertContainer = document.createElement('div');
    alertContainer.className = 'access-alert';

    // Define a cor de acordo com o status de acesso
    alertContainer.style.backgroundColor = accessGranted ? '#4CAF50' : '#f44336';

    // Adiciona o texto ao corpo do alerta
    alertContainer.innerHTML = `<p>${message}</p>`;

    // Adiciona o alerta ao corpo do documento
    document.body.appendChild(alertContainer);

    // Define um temporizador para remover o alerta após 2 segundos
    setTimeout(function () {
        alertContainer.remove();
    }, 2000);
}
