// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear();
// ********** close links ************

const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle('show-links')
    const countainerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight  = links.getBoundingClientRect().height
    if (countainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }
    else{
        linksContainer.style.height = 0;
    }
})
// ********** fixed navbar ************

const nav = document.getElementById('nav')
const btnTop = document.querySelector('.top-link')

window.addEventListener("scroll", function(){
    const scrollHeight = this.window.pageYOffset
    const navHeigth = nav.getBoundingClientRect().height
    if (scrollHeight > navHeigth){
        nav.classList.add('fixed-nav')
    }
    else{
        nav.classList.remove('fixed-nav')
    }

    if (scrollHeight > 700){
        btnTop.classList.add('show-link')
    }else{
        btnTop.classList.remove('show-link')
    }
})
// ********** smooth scroll ************

const scrollLinks = document.querySelectorAll(".scroll-link")
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(event){
        event.preventDefault();
    const id = event.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;
    const countainerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains('fixed-nav')
    
    let position = element.offsetTop - navHeight;
    if (!fixedNav){
        position -= navHeight
    }
    if (navHeight > 82){
        position += countainerHeight
    }
    console.log(position)
    window.scrollTo({
        left:0,
        top:position,
    });
    linksContainer.style.height = 0;
    })
})
// select links
