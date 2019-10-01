export let promises = () => {
    const form = document.getElementById('nameForm');
    let getData = (url) => {
        return fetch(url);
    };

    let getRepository = (name) => {
        const reposUrl = `https://api.github.com/users/${name}/repos`;
        getData(reposUrl).then(res => res.json()).then((data) => {
            let list = document.createElement('ul');
            data.forEach(e => {
                let li = document.createElement('li');
                li.textContent = e.id;
                list.appendChild(li);
            });
            document.body.appendChild(list);
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


}
