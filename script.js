const number = document.getElementById('number');
const generate = document.getElementById('generate');

const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 100000000 + 1);
    number.textContent = randomNumber;
};

generate.addEventListener('click', randomNumberGenerator);

randomNumberGenerator();