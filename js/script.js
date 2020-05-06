const alertBanner = document.getElementById('alert');
const notifications = document.getElementById('notifications');

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
