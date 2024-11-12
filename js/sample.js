// let para = document.querySelector('.para')

// console.log(para);

let para = document.querySelectorAll('.para')

console.log(para);

function firstFunction(){
    setTimeout(function(){
        console.log("This function will run after 5 seconds");
    },5000)
}
function secondFunction(){
    setTimeout(function(){
        console.log("This function will run after 1 second");
    },1000)
}

firstFunction()
secondFunction()



let body = document.querySelector('body')
body.style.backgroundColor = "red"
let element = body.createElement('div');
body.appendChild(element)