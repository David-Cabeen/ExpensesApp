window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const accountToBeEdited = urlParams.get('account');
    accounts = JSON.parse(localStorage.getItem('accounts'))
    accounts.forEach(account => {
        if (account.name == accountToBeEdited){
            document.write("<div class=\"name\">\r\n            <input id=\"name\" name=\"name\" spellcheck=\"false\" required type=\"text\"> \r\n            <label for=\"name\">Name<\/label>\r\n        <\/div>\r\n        <hr>\r\n        <div class=\"note\">\r\n            <textarea name=\"description\" id=\"note\"><\/textarea> <label for=\"description\">Description<\/label>\r\n        <\/div>\r\n        <input type=\"text\" name=\"currency\" id=\"currency\">\r\n        <input type=\"number\" name=\"balance\" id=\"balance\" step=\"any\" min=\"1\">\r\n        <button class=\"acc-create\">Create account<\/button>");
        }
    });
});