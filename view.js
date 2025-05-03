window.addEventListener('DOMContentLoaded', () => {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    const accountsParent = document.querySelector('.account-view')
    if (!accounts) {
        accountsParent.textContent = 'No accounts created.\nClick anywhere to make one!';
        accountsParent.addEventListener('click', () => {
            window.location.assign('create.html');
        });
    } else {
        for (let i = 0; i < accounts.length; i++) {
            const div = document.createElement('div'),
            accountName = document.createElement('h2'),
            currency = document.createElement('h3'),
            balance = document.createElement('h3'),
            edit = document.createElement('ion-icon'),
            note = document.createElement('p');
            edit.setAttribute('name', 'create-outline')
            currency.classList.add('currency');
            balance.classList.add('balance');
            accountsParent.textContent = '';
            note.textContent = accounts[i].note;
            accountName.textContent = accounts[i].name;
            currency.textContent = accounts[i].currency;
            balance.textContent = accounts[i].balance;
            div.append(accountName, edit, document.createElement('hr'), note, currency, balance);
            accountsParent.appendChild(div);
        };
    }
});