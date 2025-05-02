window.addEventListener('DOMContentLoaded', () => {
    let accounts = localStorage.getItem('accounts');
    const accountsParent = document.querySelector('.account-view')
    if (!accounts) {
        accountsParent.textContent = 'No accounts created \n Make one!';
        accountsParent.addEventListener('click', () => {
            window.location.assign('create.html');
        });
    } else {
        const account = JSON.parse(localStorage.getItem('account')),
        div = document.createElement('div'),
        accountName = document.createElement('h2'),
        currency = document.createElement('h3'),
        balance = document.createElement('h3');
        accountsParent.textContent = '';
        accountName.textContent = account.name;
        currency.textContent = account.currency;
        balance.textContent = account.balance;
        div.append(accountName, document.createElement('ion-icon').setAttribute('name', 'create-outline'), document.createElement('hr'), currency.classList.add('currency'), balance.classList.add('balance'));
        accountsParent.appendChild(div);
    }
});