const MAIN = document.querySelector('main');
const URL = "https://api.savasava.xyz/savapoints";
fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const text = JSON.stringify(data);
        const addElement = document.createElement('p');
        addElement.textContent = text;
        MAIN.appendChild(addElement);
});