let head = document.querySelector(".head");
let footer = document.querySelector(".footer");
let App = document.querySelector(".app");

const getJoke = () => {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data.content);
      const display = data.data.content;
      head.textContent =
        display.text_head !== "" ? display.text_head : display.text.text;
      footer.textContent =
        display.text_hidden !== "" ? display.text_hidden : display.text;
    });
};
getJoke();

App.addEventListener("click", () => {
  getJoke();
});
