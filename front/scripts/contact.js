// Seleciona o formulário
const form = document.getElementById('contact-form');

// Adiciona o evento de 'submit' para evitar o envio e exibir a mensagem de confirmação
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio real do formulário

  // Exibe a mensagem de confirmação
  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.style.display = 'block'; // Torna a mensagem visível

  // Recarrega a página após 1segundos para limpar o formulário
  setTimeout(function() {
    window.location.reload();
  }, 1000); // 1 segundos
});

