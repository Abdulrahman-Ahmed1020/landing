# Landing Page Project

## Table of Contents

- [First](#First)
- [Second](#Second)

### First

I made function called addItemToNav and in this function i did things

**fist Thing:** i select the (ul) element which are inside Header element.

**Second Thing:** after selecting, I created a (li)element inside the selector, inside this (ul)element,
then by innerHTML i created a (a)element and this (a)element has (menu\_\_link)class for styles and has
href attribute that it equal the (data-nav)class section to after clicking on item in navbar it going
to this section in page.

**Third Thing:** I made a loop to repeat the previous process.

## Second

I made function called addActiveClass and in this function i did things

**First Thing:** I used if condition in conditiion i used getBoundingClientRect().top and getBondingClientRect().bottom to know this section in viewport or not.
if it in viewport and if section don't have (your-active-class)class i will add this class for it and remove this class for another sections.

**Second Thing:** i crate a loop for repeat this process.

## Third

call all function

**First:** call first function (addItemToNav).

**Second:** I created addEventListener to during scrolling call back (addActiveClass) function to add or remove (your-active-class)class.
