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
});