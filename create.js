document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button'),
    noteBox = document.getElementById('note');

    button.addEventListener('click', () => {
        const newAcc = {
            name : document.getElementById('name').value,
            note : noteBox.value,
            currency : document.getElementById('currency').value,
            balance : document.getElementById('balance').value
        };
        localStorage.setItem('account', JSON.stringify(newAcc));
    });

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