export let promises = () => {
    const form = document.getElementById('nameForm');
    let handleErrors = (res) => {
        if (!res.ok) {
            let div = document.createElement('div');
            div.textContent = res.statusText;
            document.body.appendChild(div);
            throw Error(res.statusText);
        }
        return res;
    };
    let getData = (url) => {
        return fetch(url).then(handleErrors);
    };

    let getRepository = (name) => {
        const reposUrl = `https://api.github.com/users/${name}/repos`;
        getData(reposUrl).then(res => res.json()).then((data) => {
            let list = document.createElement('ul');
            if (data.length) {
            data.forEach(e => {
                let li = document.createElement('li');
                li.textContent = e.name;
                list.appendChild(li);
            });
            document.body.appendChild(list);
            } else {
                let div = document.createElement('div');
                div.textContent = 'No pubic repositories';
            }
        });
    };

    form.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const url = `https://api.github.com/users/${name}`;
        e.preventDefault();
        getData(url).then(() => {
            getRepository(name);
        });
    });
};
