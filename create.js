document.addEventListener('DOMContentLoaded', () => {
    function handleSubmit() {
        const newAcc = {
            name : document.getElementById('name').value,
            description : document.getElementById('description').value,
            currency : document.getElementById('currency').value,
            balance : document.getElementById('balance').value
        };
        localStorage.setItem('account', JSON.stringify(newAcc));
    };
});