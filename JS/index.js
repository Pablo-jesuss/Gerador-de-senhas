// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");
// Funções
const getLetterLowerCase = () => {
  return String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCodePoint(Math.floor(Math.random() * 26) + 65);
};
// Eventos
generatePasswordButton.addEventListener("click", () => {
  console.log("teste");
});
