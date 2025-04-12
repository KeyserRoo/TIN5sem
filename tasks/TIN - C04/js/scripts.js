function transferSite(url) {
  window.location.href = url;
}
function redirect(url) {
  window.location.href = "examplegame.html";
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = ['navbarIndexPageRedirect', 'navbarLoginPageRedirect', 'navbarRegisterPageRedirect','formIndexPageRedirect','formLoginPageRedirect','formRegisterPageRedirect'];
  const destinations = ['index.html', 'loginPage.html', 'registerPage.html'];

  buttons.forEach((buttonId, index) => {
      const button = document.getElementById(buttonId);
      if (button) {
          button.addEventListener('click', () => transferSite(destinations[index%3]));
      } else {
          console.log(`${buttonId} not found`);
      }
  });
});
