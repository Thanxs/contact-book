document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementsByClassName("login")[0]
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
    
      fetch(`${window.location.origin}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then(() => {         
          window.location.replace(window.location.origin);
        })
        .catch(console.error);
    });
});
