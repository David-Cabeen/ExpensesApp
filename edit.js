window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const accountToBeEdited = urlParams.get('account');
    accounts = JSON.parse(localStorage.getItem('accounts'))
    accounts.forEach(account => {
        if (account.name == accountToBeEdited){
            const h2 = document.createElement('h2');
            h2.textContent = accountToBeEdited;
        }
    });
});