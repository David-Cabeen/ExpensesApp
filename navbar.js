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
            console.log(page);
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
        if (Math.abs(touchendX - touchstartX) > 250) {
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
    console.log(currentPage)

    function cycleForwards() {
        currentPage++;
        window.location.assign(pages[currentPage] + '.html');
    };

    function cycleBackwards() {
        currentPage--;
        window.location.assign(pages[currentPage] + '.html');
    };

});