let imgList = [1, 2, 3, 4, 5];
console.log(imgList)

let imgDiv = document.querySelector('.img-container')
let prev = document.querySelector('.left-arrow') 
let next = document.querySelector('.right-arrow') 

// creare la struttura html
for (let i = 0; i < imgList.length; i++) {

    imgDiv.innerHTML += `
    <div class="item">
        <img src="./assets/img/0${imgList[i]}.webp" alt="Foto Carosello" class="img-fluid">   
    </div>
    `
    document.querySelector('.item').classList.add('active')

    // if (i=0) {
    //     document.querySelector('.item').classList.add('first-img')
    // }

}

// next image
next.addEventListener('click', function() {

    let activeItem = document.querySelector('.item.active');
    console.log(activeItem);

    let itemToActive = activeItem.nextElementSibling;
    console.log(itemToActive);

    activeItem.classList.remove('active');
    itemToActive.classList.add('active');

})

// previous image
prev.addEventListener('click', function() {

    let activeItem = document.querySelector('.item.active');
    console.log(activeItem);

    let itemToActive = activeItem.previousElementSibling;
    console.log(itemToActive);

    activeItem.classList.remove('active');
    itemToActive.classList.add('active');

})