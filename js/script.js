const alertBanner = document.getElementById('alert');
const notifications = document.getElementById('notifications');
const userField = document.getElementById('userField');
const messageField = document.getElementById('messageField');
const send = document.getElementById('send');

alertBanner.innerHTML =
    `<div class="alert-banner">
        <p><strong>Alert</strong> danger, danger, this is a warning or an update or something different entirely... i'm not quite sure</p>
        <p class="alert-banner-close">x</p>
        </div>`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.value.includes("alert-banner-close")) {
        alertBanner.style.display = 'none',
        notifications.style.display = 'none'
    }
});


send.addEventListener('click', () => {
      event.preventDefault();

      if (userField.value === "") {
        alert("Looks like you forgot to select a use, you fool of a took! Please try again :)");
    } else if (messageField.value === "") {
        alert("Looks like you forgot to write a message, you silly-billy! Please try again :)");
    } else {
        alert("That's the best message I have seen this page loaded. Kudos!");
        document.getElementById("messageField").value = "";
        document.getElementById("userField").value = "";
    }

});
