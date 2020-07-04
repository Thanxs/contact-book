const contacts = document.getElementById("contacts");

fetch("/api/contacts")
  .then(res => res.json())
  .then(res => {
      const { data } = res;
      
        data.forEach(contact => {
            const c = document.createElement("li");
            c.innerHTML = `
              <div class="contact-inner"><span>First name: <span><span>${contact.first_name || '-'}</span></div>
              <div class="contact-inner"><span>Last name: <span><span>${contact.last_name || '-'}</span></div>
              <div class="contact-inner"><span>Email: <span><span>${contact.email || '-'}</span></div>
              <div class="contact-inner"><span>Phone: <span><span>+${contact.phone || '-'}</span></div>
              <div class="contact-inner"><span>Position: <span><span>${contact.position || '-'}</span></div>
              <div class="contact-inner"><span>Additional info: <span><span>${contact.additional || '-'}</span></div>
              <div class="contact-inner"><span>Telegram: <span><span>${contact.telegram || '-'}</span></div>
              <div class="contact-inner"><span>Instagram: <span><span>${contact.instagram || '-'}</span></div>
              <div class="remove-btn">
                <a class="remove" id="${contact._id}">Delete contact</a>
              </div>
              `;
            contacts.append(c);
            c.classList.add('contact');
          });  
  });

  document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementById("contact-form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const first_name = e.target[0].value;
        const last_name = e.target[1].value;
        const email = e.target[2].value;
        const phone = e.target[3].value;
        const position = e.target[4].value; 
        const additional = e.target[5].value;
        const telegram = e.target[6].value; 
        const instagram = e.target[7].value; 
      
        fetch(`${window.location.origin}/api/contacts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ first_name, last_name, email, phone, position, additional, telegram, instagram }),
        })
          .then(() => {
            window.location.reload();         
          })
          .catch(console.error);
      });
  });

  setTimeout(() => {
    const removes = document.querySelectorAll('.remove');
    removes.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const contact_id = e.target.id;
        fetch(`${window.location.origin}/api/contacts/${contact_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        })
        .then(res => res.json())
        .then(res => {
          window.location.reload();
          return res
        })
        .catch(err => console.error(err))        
      })
    })
  }, 1000)
  
  