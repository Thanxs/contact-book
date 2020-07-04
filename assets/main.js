const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  fetch(`${window.location.origin}/logout`).then(() => {
    window.location.replace(`${window.location.origin}/login`)
  })
  .catch(console.error);
})