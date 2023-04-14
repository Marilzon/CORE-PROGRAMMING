function showMessage(mensage: unknown): void {
	if (typeof mensage === 'string') {
	  console.log(mensage);
	} else {
	  console.log('This message is not a string.');
	}
  }

  showMessage('Olá, mundo!'); // Exibe "Olá, mundo!"
  showMessage(123); // Exibe "A mensagem não é uma string."
