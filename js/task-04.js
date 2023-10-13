let counterValue = 0;

const increment = (value) => {
    counterValue += value;
}

const counterSpan = document.getElementById('value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
    increment(-1);
    counterSpan.textContent = counterValue;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
    increment(1);
    counterSpan.textContent = counterValue;
});