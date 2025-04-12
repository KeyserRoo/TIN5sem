function transferSite(url) {
  window.location.href = url;
}

function redirect(value) {
  if (value !== "") {
    window.location.href = "examplegame.html";
  }
}


function transferSite(url) {
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = ['mainbutton', 'logbutton', 'regbutton','mainPage','loginPage','registerPage'];
  const destinations = ['index.html', 'loginPage.html', 'accountCreation.html'];

  buttons.forEach((buttonId, index) => {
      const button = document.getElementById(buttonId);
      if (button) {
          button.addEventListener('click', () => transferSite(destinations[index%3]));
      } else {
          console.log(`${buttonId} not found`);
      }
  });
});
