import {fundamentals} from './fundamentals.js';

fundamentals();

const form = document.getElementById('nameForm');

let getData = (url) => {
    return fetch(url);
};
form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;

    const url = `https://api.github.com/users/${name}`;
    e.preventDefault();
    getData(url).then(res => {
        console.log("REEEEEES", res);
    });
});
