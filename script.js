const ratingNumber = document.querySelectorAll('.rating-number-single')
const ratingDiv = document.querySelector('rating-number')
const result = document.querySelector('.result')
const activeState = document.querySelector('.active')
const button = document.querySelector('.btn')
const beforeDiv = document.querySelector('.before')
const afterDiv = document.querySelector('.after')
button.disabled = true

for (let i = 0; i < ratingNumber.length; i++) {
    ratingNumber[i].addEventListener('click', function () {
        // remove active class for all elements
        for (let i = 0; i < ratingNumber.length; i++) {
            ratingNumber[i].classList.remove('active');
        }
        // add active to clicked element
        this.classList.add('active');
        button.classList.remove('deactivated')
        button.disabled = false
        result.innerHTML = document.querySelector('.active').value
    });
}

button.addEventListener('click', (e) => {
    beforeDiv.classList.add('hide')
    afterDiv.classList.remove('hide')
})

