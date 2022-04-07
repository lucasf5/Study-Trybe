const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};
// As HOFs são funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las.
button.addEventListener('click', registerUser);
