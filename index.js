var translateBtn = document.querySelector("#translate-btn");

var input = document.querySelector("#input");

var divOutput = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function constructURL(inputText) {
  return `${url}?text=${inputText}`;
}

function translater() {
  var text = input.value;

  fetch(constructURL(text))
    .then((response) => response.json())
    .then((translatedInput) => {
      console.log(translatedInput);
      divOutput.innerText = translatedInput.contents.translated;
    })
    .catch((error) => {
      console.log(error);
      alert("Server Problem,Please try again after some time");
    });
}

translateBtn.addEventListener("click", translater);
