let button = document.getElementById('commentBtn');
let input = document.getElementById('inputField');
let allcomment = document.getElementById('all-comment');

button.addEventListener('click', () =>{
    let commentDiv = document.createElement('div')
    allcomment.appendChild(commentDiv);
    commentDiv.setAttribute('class','mainComment');
    let commentImg = document.createElement('img');
    commentImg.setAttribute('src','../img/about-1.jpg');
    commentImg.style.width ='2rem'
    commentImg.style.height ='2rem'
    commentImg.style.borderRadius ='50%'
    commentDiv.appendChild(commentImg);

    let commentText = document.createElement('p');
    commentDiv.appendChild(commentText);
    commentDiv.style.display = 'flex';
    commentDiv.classList.add('comment-main')
    commentText.innerHTML = input.value;
    commentDiv.style.cursor = "pointer"
    input.value = ""

    commentDiv.addEventListener('dbclick', () => {
        allcomment.removeChild(commentDiv)
    })

})
