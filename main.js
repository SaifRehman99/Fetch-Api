document.querySelector('#getText').addEventListener('click', (e) => {
    fetch('file.txt')
        .then((res) => res.text())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

})
document.querySelector('#getJson').addEventListener('click', (e) => {
    fetch('data.json')
        .then((res) => res.json())
        .then((data) =>{
            data.forEach((item)=>{
                document.querySelector('.json').innerHTML +=`<ul>
                <li></li></ul>` 
            })
        })
        .catch((err) => console.log(err));

})
document.querySelector('#getApi').addEventListener('click', (e) => {
    fetch('file.txt')
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

})