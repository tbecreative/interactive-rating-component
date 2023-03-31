const submitButton = document.getElementById('submit-button');
const rateButton = document.getElementById('rate-button');
const btn = document.querySelectorAll('button');
const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thanks-container');
const rating = document.getElementById('rate-number');

submitButton.addEventListener('click', () => {
    thanksContainer.classList.remove('hidden');
    mainContainer.style.display = 'none';
});

rateButton.addEventListener('click', () => {
    thanksContainer.classList.add('hidden');
    mainContainer.style.display = 'flex';
});

btn.forEach((btn) => {
    btnn.addEventListener('click', () => {
    
    
        rating.innerHTML = btn.innerHTML;
    })
})

