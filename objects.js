// let album = {
//     title: 'Black Album',
//     released: 1991,
//     showInfo: function () {
//         console.log(`Título do Album: ${this.title}, lançado em: ${this.released}`)
//     }
// }

let album = new Object();
album.title = 'Black Album';
album.released = 1991;
album.showInfo = function () {
    console.log(`Título do Album: ${this.title}, lançado em: ${this.released}`)
}

album.showInfo();
console.log(album.released);
console.log(album.title);

album.tracks = ['Enter Sandman', 'The Unforgiven', 'Nothing Elese Matters', 'The Struggle Within'];

album.showTracks = function () {
    this.tracks.forEach((value, key) => {
        console.log(value);
    });
}

album.showTracks();