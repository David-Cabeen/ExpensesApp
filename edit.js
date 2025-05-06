import { accountToBeEdited } from "./view";

window.addEventListener('DOMContentLoaded', () => {
    accounts = JSON.parse(localStorage.getItem('accounts'))
    accounts.forEach(account => {
        if (account.name == accountToBeEdited){
            
        }
    });
});