
const url = 'data/data.json';

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data.tracks);
        let track = data.tracks;

        buildTable(track);
    })
    .catch(function (error) {
        console.log(error)
    });

function buildTable(data) {
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++) {
        var row =
            `<tr>
                    <td>${data[i].tracksNum}</td>
                    <td>${data[i].tracksName}</td>
                    <td>${data[i].tracksLength}</td>
              </tr>`
        table.innerHTML += row
    }
}
