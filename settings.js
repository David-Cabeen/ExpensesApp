document.addEventListener('DOMContentLoaded', function () {
    const settings = document.getElementById('settings'),
    darkmodeToggle = document.getElementById('darkmode'),
    accentSelectors = document.querySelector('.radio-container'),
    addColorButton = document.getElementById('add');
    let darkmode = localStorage.getItem('darkmode');

    for(let i = 0; i < accentSelectors.childElementCount; i++){
        if (window.getComputedStyle(accentSelectors.children[i], '::after').backgroundColor == localStorage.getItem('color')) {
            accentSelectors.children[i].checked = true;
            addColorButton.nextElementSibling.style.outline = 'none';
            break;
        } else {
            addColorButton.nextElementSibling.style.outline = `2px solid ${localStorage.getItem('color')}`;
        }
    };

    accentSelectors.addEventListener('click', function(e) {
        if (e.target.parentElement == accentSelectors && e.target.getAttribute('name') == 'accent') {
            addColorButton.nextElementSibling.style.outline = 'transparent';
            localStorage.setItem('color', window.getComputedStyle(e.target, '::after').backgroundColor);
            document.querySelector(':root').style.setProperty('--primary-color', localStorage.getItem('color'));
        } else return;
    });

    function openDropdown(open, name) {
        let options = settings.querySelectorAll('li')
        for(let i = 0; i < options.length; i++) {
            const h2Element = options[i].querySelector('h2');
            const title = h2Element ? h2Element.textContent : '';
            if (title == name) {
                const listName = document.getElementById(title.toLowerCase());
                if (open) {
                    listName.style.gridTemplateRows = '1fr';
                } else {
                    listName.style.gridTemplateRows = '0fr';
                }
                
            }
        };
    };
    
    settings.addEventListener('click', function(e) {
        let open = null
        if(e.target.getAttribute('name') == 'chevron-forward-outline') {
            e.target.classList.toggle('open-settings-dropdown');
            e.target.classList.contains('open-settings-dropdown') ? open = true : open = false;
            openDropdown(open, e.target.previousSibling.textContent);
        } else if ( e.target.nextElementSibling.getAttribute('name') == 'chevron-forward-outline') {
            e.target.nextElementSibling.classList.toggle('open-settings-dropdown');
            e.target.nextElementSibling.classList.contains('open-settings-dropdown') ? open = true : open = false;
            openDropdown(open, e.target.textContent);
        };
    });

    if(darkmode !== 'active') {
        document.body.classList.add('lightmode');
        darkmodeToggle.checked = false;
    } else {
        document.body.classList.remove('lightmode')
    };

    darkmodeToggle.addEventListener('change', function() {
        document.body.classList.toggle('lightmode');
        if(document.body.classList.contains('lightmode')) {
            localStorage.setItem('darkmode', null);
        } else {
            localStorage.setItem('darkmode', 'active')
        };
    });

    addColorButton.addEventListener('change', function() {
        for(let i = 0; i < accentSelectors.childElementCount; i++){
            accentSelectors.children[i].checked = false;
        };
        localStorage.setItem('color', addColorButton.value);
        document.querySelector(':root').style.setProperty('--primary-color', localStorage.getItem('color'));
        addColorButton.nextElementSibling.style.outline = `2px solid ${localStorage.getItem('color')}`;
    });

    setTimeout(() => {
        document.querySelectorAll('*').forEach(element => {
            const currentTransition = window.getComputedStyle(element).transition;
            const newTransition = 'background-color 0.2s, color 0.2s';
            element.style.transition = currentTransition
                ? `${currentTransition}, ${newTransition}`
                : newTransition;
        });
    }, 20);
});