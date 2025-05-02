window.addEventListener('DOMContentLoaded', () => {
    let account = JSON.parse(localStorage.getItem('account'));
    const accountsParent = document.querySelector('.account-view')
    if (!account) {
        accountsParent.textContent = 'No accounts created \n Make one!';
        accountsParent.addEventListener('click', () => {
            window.location.assign('create.html');
        });
    } else {
        const div = document.createElement('div'),
        accountName = document.createElement('h2'),
        currency = document.createElement('h3'),
        balance = document.createElement('h3'),
        edit = document.createElement('ion-icon');
        edit.setAttribute('name', 'create-outline')
        currency.classList.add('currency');
        balance.classList.add('balance')
        accountsParent.textContent = '';
        accountName.textContent = account.name;
        currency.textContent = account.currency;
        balance.textContent = account.balance;
        const order = [accountName, edit, document.createElement('hr'), currency, balance]
        div.replaceChildren(order);
        accountsParent.appendChild(div);
    }
});