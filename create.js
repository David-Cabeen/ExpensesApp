document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button'),
    noteBox = document.getElementById('note'),
    accountList = [JSON.parse(localStorage.getItem('accounts'))]

    button.addEventListener('click', () => {
        const newAcc = {
            name : document.getElementById('name').value,
            note : noteBox.value,
            currency : document.getElementById('currency').value,
            balance : document.getElementById('balance').value
        };
        accountList.push(newAcc);
        localStorage.setItem('accounts', JSON.stringify(accountList));
        setTimeout(() => {
            window.location.assign('view.html');
        }, 1);
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