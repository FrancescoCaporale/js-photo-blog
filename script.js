const board = document.getElementById("board");

fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then(res => res.json())
  .then(data => {


    const pictures = data.response ?? data; 

    board.innerHTML = "";

    for (let i = 0; i < pictures.length; i++) {
      board.innerHTML += `
        <div class="card">
          <div class="pin"></div>
          <img src="${pictures[i].url}" alt="">
          <p class="text">${pictures[i].title}</p>
        </div>
      `;
    }
  })
  .catch(err => console.log("ERRORE FETCH:", err));