parasails.registerUtility('showToast', function showToast(message, options) {
  // Define os valores padrão para as opções
  options = options || {};
  var title = options.title || 'Notificação';
  var delay = options.delay || 5000; // Duração padrão do toast em milissegundos

  // Pega o toast do document
  var toastElement = document.getElementById('liveToast');
  toastElement.getElementsByClassName('title')[0].innerHTML = title;
  toastElement.getElementsByClassName('toast-body')[0].innerHTML = message;

  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement, {
    delay
  })
  toastBootstrap.show()
});