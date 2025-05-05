document.addEventListener('DOMContentLoaded', function () {
    const darkmode = localStorage.getItem('darkmode'),
    color = localStorage.getItem('color'),
    nav = document.querySelector('nav');
    nav.addEventListener('click', function(e) {
        if (e.target.parentElement === nav) {
            let page = e.target.getAttribute('name').split('-')[0];
            switch (page) {
                case 'home' : page = 'index'; break;
                default : page = page;
            };
            window.location.assign(page + '.html');
        };
    });
    if(darkmode !== 'active') {
        document.body.classList.add('lightmode');
    } else {
        document.body.classList.remove('lightmode');
    };
    document.querySelector(':root').style.setProperty('--primary-color', color);

    let touchstartX = 0;
    let touchendX = 0;
        
    function checkDirection() {
        if (Math.abs(touchendX - touchstartX) > 150) {
            if (touchendX < touchstartX) cycleForwards();
            if (touchendX > touchstartX) cycleBackwards();
        };
    };

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
    });

    const pages = ['index', 'settings', 'analytics', 'person'];
    let currentPage = 0;
    switch (window.location.pathname.replace('/', '')) {
        case 'index.html' : currentPage = 0; break;
        case 'settings.html' : currentPage = 1; break;
        case 'analytics.html' : currentPage = 2; break;
        case 'person.html' : currentPage = 3;
    }

    function cycleForwards() {
        if (currentPage != 3) {
            currentPage += 1;
            window.location.assign(pages[currentPage] + '.html');
        };
    };

    function cycleBackwards() {
        if (currentPage != 0) {
            currentPage -= 1;
            window.location.assign(pages[currentPage] + '.html');
        }
    };
});