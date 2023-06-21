console.log('%c HI', 'color: firebrick')


//Challenge 1
//Add JavaScript that:
//const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array

//First I have to:
//[x] write a function that takes in a url and returns a fetch, and chains a .then to take the json response
//[x] pass the image url into the fetch function, chaining a .then callback function to iterate on the image array (so chaining a .message to make sure targeting the array, and not the response object), using a function to render images to the DOM as a callback
//[x] define a variable for the image container in global scope
//[x] write a render images function that creates image elements, sets their src values equal to the key.values from the json data, and appends them to the DOM
//[x] pass the render images function into the fetch function

//Challenge 2
//After the first challenge is completed, add JavaScript that:
//const breedUrl = "https://dog.ceo/api/breeds/list/all";
//on page load, fetches all the dog breeds using the url above ⬆️
//adds the breeds to the page in the <ul> provided in index.html

//Then I will need to:
//[x] define a variable for the ul container in global scope
//[x] write a function to render the breeds to the DOM that creates a li element, sets the value equal to the keys in the json data, and appends them to the DOM
//[x] pass the render breeds function into the fetch function, returning the object keys and iterating over that array


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

function getData(url) {
    return fetch(url)
    .then(res => res.json())

}

getData(imgUrl)
.then(resObj => {
    resObj.message.forEach(renderImage)
})

getData(breedUrl)
.then(resObj => {
    return Object.keys(resObj.message)
    .forEach(renderBreeds)
})

const imageContainer = document.querySelector("#dog-image-container")
const dogBreeds = document.querySelector("#dog-breeds")

function renderImage(message) {
    const image = document.createElement('img')
    image.src = message

    imageContainer.appendChild(image)
}

function renderBreeds(message) {
    const li = document.createElement('li')
    li.textContent = message

    dogBreeds.appendChild(li)
}