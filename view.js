let accountToBeEdited;
export { accountToBeEdited };

window.addEventListener('DOMContentLoaded', () => {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    const accountsParent = document.querySelector('.account-view');
    if (!accounts) {
        accountsParent.textContent = 'No accounts created.\nClick anywhere to make one!';
        accountsParent.addEventListener('click', () => {
            window.location.assign('create.html');
        });
    } else {
        accountsParent.textContent = '';
        accounts.forEach(account => {
            const div = document.createElement('div'),
            accountName = document.createElement('h2'),
            currency = document.createElement('h3'),
            balance = document.createElement('h3'),
            edit = document.createElement('ion-icon'),
            note = document.createElement('p');
            edit.setAttribute('name', 'create-outline');
            currency.classList.add('currency');
            balance.classList.add('balance');
            note.textContent = account.note;
            accountName.textContent = account.name;
            currency.textContent = account.currency;
            balance.textContent = account.balance;
            div.append(accountName, edit, document.createElement('hr'), note, currency, balance);
            accountsParent.appendChild(div);
            edit.addEventListener('click', () => {
                accountToBeEdited = edit.parentElement.querySelector('h2').textContent; 
                window.location.assign('edit.html');
            });
        });
    }
});