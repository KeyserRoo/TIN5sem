document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-button');
  const gameSelect = document.querySelector('.nav-select');
  const exbutton = document.getElementById('exbutton');

  buttons.forEach(button => {
    button.addEventListener('click', () => navigateTo(button.dataset.url));
  });

  exbutton.addEventListener('click', () => navigateTo(exbutton.dataset.url));

  gameSelect.addEventListener('change', () => changeGame('gameSelect.value'));

  function navigateTo(url) {
    fetch(url).then((r) => { return r.text() }).then((r) => { document.body.innerHTML = r });
  }

  function changeGame(value) {
    fetch("/game").then((r) => { return r.text() }).then((r) => { document.body.innerHTML = r });
  }
});