let loader = document.querySelector('.loader');
let main = document.querySelector('.main');


function init(){
    setTimeout(() => {
    //     loader.style.opacity = 0;
    // loader.style.display = 'none'
        
    loader.classList.add('loader-1')
    // main.style.display = 'block';
    main.classList.add('main-1')
    setTimeout(() => {
        // main.style.opacity = 0.5;
        main.classList.add('main-2')
        
    }, 500);
        
    },4000);
}
init()