document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementsByClassName("registration")[0]
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
      
        fetch(`${window.location.origin}/api/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then(() => {
            window.location.replace(`${window.location.origin}/success`);
          })
          .catch(console.error);
      });
  });
  