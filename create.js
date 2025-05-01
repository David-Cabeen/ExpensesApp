document.addEventListener('DOMContentLoaded', () => {
    const descriptionBox = document.getElementById('description');
    descriptionBox.addEventListener('input', () => {
        const label = descriptionBox.nextElementSibling.style;
        if (descriptionBox.value) {
            label.top = 0;
            label.left = '5%';
            label.fontSize = '90%';
        } else {
            label.top = '50%';
            label.left = '2%';
            label.fontSize = '100%';
        }
    });
});