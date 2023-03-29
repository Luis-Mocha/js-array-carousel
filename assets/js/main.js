let imgList = [1, 2, 3, 4, 5];
console.log(imgList)

let imgDiv = document.querySelector('.img-container');
let thukbDiv = document.querySelector('#thumbs')
let prev = document.querySelector('.left-arrow');
let next = document.querySelector('.right-arrow');

// creare la struttura html
for (let i = 0; i < imgList.length; i++) {

    imgDiv.innerHTML += `
    <div class="item">
        <img src="./assets/img/0${imgList[i]}.webp" alt="Foto Carosello" class="img-fluid">   
    </div>
    `
}

/* Aggiungo la classe "ACTIVE" al primo elemento
document.querySelector('.item').classList.add('active') */

// Seleziono tutti gli elementi con item
let itemElements = document.querySelectorAll('.item');
console.log(itemElements);
// Al primo elemento item aggiungo la classe "FIRST-IMG" e "ACTIVE"
itemElements[0].classList.add('first-img','active')
// All'ultimo item aggiungo la classe "LAST-IMG"
itemElements[itemElements.length - 1].classList.add('last-img')




// next image
next.addEventListener('click', function() {

    let activeItem = document.querySelector('.item.active');
    console.log(activeItem);

    let itemToActive = activeItem.nextElementSibling;
    console.log(itemToActive);

    if (activeItem.classList.contains('last-img')) {
        itemToActive = document.querySelector('.item.first-img')
    }

    // spostamento classe active
    activeItem.classList.remove('active');
    itemToActive.classList.add('active');

    // -- per le thumb
    let activeThumb = document.querySelector('.thumb-active');
    let thumbToActive = activeThumb.nextElementSibling;

    if (activeThumb.classList.contains('last-thumb')) {
        thumbToActive = document.querySelector('.first-thumb')
    }

    activeThumb.classList.remove('thumb-active');
    thumbToActive.classList.add('thumb-active');
})

// previous image
prev.addEventListener('click', function() {

    let activeItem = document.querySelector('.item.active');
    console.log(activeItem);

    let itemToActive = activeItem.previousElementSibling;
    console.log(itemToActive);

    if (activeItem.classList.contains('first-img')) {
        itemToActive = document.querySelector('.item.last-img')
    }

    // spostamento classe active
    activeItem.classList.remove('active');
    itemToActive.classList.add('active');

    // -- per le thumb
    let activeThumb = document.querySelector('.thumb-active');
    let thumbToActive = activeThumb.previousElementSibling;

    if (activeThumb.classList.contains('first-thumb')) {
        thumbToActive = document.querySelector('.last-thumb')
    }

    activeThumb.classList.remove('thumb-active');
    thumbToActive.classList.add('thumb-active');
})

// THUMBS

let thumbElements = document.querySelectorAll('#thumbs img');
console.log(thumbElements);