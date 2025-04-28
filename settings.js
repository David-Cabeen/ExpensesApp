window.addEventListener('DOMContentLoaded', function () {
    const settings = document.getElementById('settings'),
    darkmodeToggle = document.getElementById('darkmode'),
    accentSelector = document.getElementById('accent');
    let darkmode = localStorage.getItem('darkmode');

    function openDropdown(open, name) {
        let options = settings.querySelectorAll('li')
        for(let i = 0; i < options.length; i++) {
            const h2Element = options[i].querySelector('h2');
            const title = h2Element ? h2Element.textContent : '';
            if (title == name) {
                const listName = document.getElementById(title.toLowerCase());
                if (open) {
                    listName.style.display = 'block';
                } else {
                    listName.style.display = 'none';
                }
                
            } else {
                return;
            };
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
        }
    })
});