document.addEventListener('DOMContentLoaded', () => {
    const noteBox = document.getElementById('note'),
    tagsContainer = document.querySelector('.tags-container'),
    accountSelector = document.getElementById('account');

    noteBox.addEventListener('input', () => {
        const label = noteBox.nextElementSibling.style;
        if (noteBox.value) {
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