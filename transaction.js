document.addEventListener('DOMContentLoaded', () => {
    const noteBox = document.getElementById('note'),
    tagsContainer = document.querySelector('.tags-container'),
    accountSelector = document.getElementById('account'),
    submitButton = document.querySelector('button'),
    amount = document.getElementById('amount'),
    expense = document.getElementById('expense'),
    accounts = JSON.parse(localStorage.getItem('accounts'));
    let transactionList = [];

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
    };

    accountSelector.addEventListener('input', () => {
        document.querySelector('input[name="amount"]').style.setProperty('--after-content', JSON.parse(localStorage.getItem(accountSelector.value)).currency);
    });

    submitButton.addEventListener('click', () => {
        if (accountSelector.value != "Select an account" && amount.value) {
            const transaction = {
                type: expense.checked ? 'expense' : 'income',
                amount: amount.value,
                note: noteBox.value
            };
            transactionList.push(transaction);
            localStorage.setItem(accountSelector.value, transactionList);
        };
    });


});