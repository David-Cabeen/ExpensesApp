document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelector('.buttons')
    buttons.addEventListener('click', (e) => {
        if (e.target.parentElement === buttons) {
            window.location.assign(e.target.getAttribute('id'));
        };
    });
});