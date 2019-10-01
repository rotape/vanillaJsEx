import {fundamentals} from './fundamentals.js';

fundamentals();

const form = document.getElementById('nameForm');

let getData = (url) => {
    return fetch(url);
};

let getRepository = (name) => {
    const reposUrl = `https://api.github.com/${name}/repos`;
    getData(reposUrl).then(res=>console.log('GET REPOOOSRESPONSE', res));
};

form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;

    const url = `https://api.github.com/users/${name}`;
    e.preventDefault();
    getData(url).then(res => {
        console.log("REEEEEES", res);
        getRepository(name);
    });
});
