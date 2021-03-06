const sections = document.querySelectorAll('section');

// This function for add item to navbar dynamically and on click it, it goes the section in page
function addItemToNav() {
    // loop for every section i made it in navbar dynamically 
    for (section of sections) {
        document.querySelector('.navbar__menu').
            querySelector('ul')
            .appendChild(document.createElement('li'))
            .innerHTML = `<a class="menu__link" href="#${section.getAttribute('id')}" >${section.getAttribute('data-nav')}</a>`
    }
}

// this function for know the section in the viewport or not and add your-active-class to the section or remove
function addActiveClass() {
    for (section of sections) {
        if (section.getBoundingClientRect().y <= 100 && section.getBoundingClientRect().bottom >= 300) {
            if (!section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class');
            }
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

// build the nav
addItemToNav();

//add the class (your-active-class)
document.addEventListener('scroll', addActiveClass);
