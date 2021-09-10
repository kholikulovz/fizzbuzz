let elTitle = document.getElementById ('title');
let elForm = document.getElementById ('form');
let elInput = document.getElementById ('input');
let elButton = document.getElementById ('button');
let elText = document.getElementById ('text');


elForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let number = elInput.value - 0
    if(!isNaN(number)){
        if (number % 15 === 0){
            elText.textContent = 'FizzBuzz'
        }
        else if (number % 3 === 0){
            elText.textContent = 'Fizz'
        }
        else if (number % 5 === 0){
            elText.textContent = 'Buzz'
        }
        else {
            elText.textContent = number
        }
    }else {
        elText.textContent = 'Raqam kiritish talab qilinadi!!!'
    }
})