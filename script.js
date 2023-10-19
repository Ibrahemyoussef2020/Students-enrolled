const nav = document.querySelector('nav');


window.addEventListener('scroll' , ()=>{
    if (window.scrollY > 70) {
        console.log('scrolled');
        nav.classList.add('scrolled')
    }else{
        nav.classList.remove('scrolled');
    }
})

