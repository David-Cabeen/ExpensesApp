document.addEventListener('DOMContentLoaded', () => {
    const noteBox = document.getElementById('note'),
    tagsContainer = document.querySelector('.tags-container'),
    accountSelector = document.getElementById('account'),
    accounts = JSON.parse(localStorage.getItem('accounts'));

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

    if (accounts) {
        accounts.forEach(account => {
            const option = document.createElement('option');
            option.value = account.name;
            option.textContent = account.name;
            accountSelector.appendChild(option);
        });
    }

});