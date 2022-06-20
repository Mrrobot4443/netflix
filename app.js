async function getData(url) {
    let res = await fetch(url);
    return res.json();
}
let row = document.getElementById('data')
getData("https://api.watchmode.com/v1/sources/?apiKey=RXnibDhDTacGWiE349ruwDd9loWC6FHMsmfxeyEb")
    .then((data) => {

        console.log(data);

    })
for (let i = 0; i < data.results.length; i++) {
    let col = document.createElement('div');
    col.classList.add('col-md-3', 'my-3', 'text-center')
    let card = document.createElement('div');
    card.classList.add('card', 'shadow', 'rounded')
}
// function a() {
//     let cont = 0
//     return function() {
//         return cont++

//     }

// }
// let res = a()
// console.log(res());
$(li)