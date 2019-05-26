document.querySelector('#getText').addEventListener('click', (e) => {
    fetch('file.txt')
        .then((res) => res.text())
        .then((data) => {
            document.querySelector('.text').innerHTML = data
        })
        .catch((err) => console.log(err));

})
document.querySelector('#getJson').addEventListener('click', (e) => {
    fetch('data.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((item) => {
                document.querySelector('.json').innerHTML += `<ul>
                <li>ID : ${item.id}</li>
                <li>Name : ${item.name}</li>
                <li>Email : ${item.email}</li>
                </ul>`
            })
        })
        .catch((err) => console.log(err));

})
document.querySelector('#getApi').addEventListener('click', (e) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((item) => {
                document.querySelector('.api').innerHTML += `<div class = 'mt-5'>
            <h2>Title : ${item.title}</h2>
            <h4>Body : ${item.body}</h4>
            <div>`
            })
        })
        .catch((err) => console.log(err));
})

document.querySelector('#addData').addEventListener('submit', (e) => {

    e.preventDefault();

    let title = document.querySelector('#tit').value;
    let body = document.querySelector('#bod').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body
        })
    })

        .then((Res) => res.json())
        .then((data) => console.log(data))
})