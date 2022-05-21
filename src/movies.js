let myList = document.querySelector("ol");

async function getMovies() {
  fetch("http://localhost:3011/movies")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      message = JSON.stringify(json.message);
      console.log(json);
      showResults(json);
    });
}

async function deleteMovie() {
  let id = document.getElementById("deleteId").value;
  fetch("http://localhost:3011/movies/"+`${id}`, {
    method: "DELETE",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      message = JSON.stringify(json.message);
      console.log(json);
      showResults(json);
    });
}

async function getMovieByID() {
  let id = document.getElementById("getId").value;

  fetch("http://localhost:3011/movies/"+`${id}`, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      message = JSON.stringify(json.message);
      console.log(json);
      showResults(json);
    });
}

async function addMovie() {
  fetch("http://localhost:3011/movies/add", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 10,
      title: "Dances with Wolves",
      genres: ["Adventure", "Western ", "Drama"],
      year: 1990,
      director: "Kevin Costner",
      actors: [
        "Kevin Costner",
        "Mary McDonnell",
        "Graham Greene",
        "Rodney A. Grant",
      ],
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      message = JSON.stringify(json.message);
      console.log(json);
      showResults(json);
    });
}

async function updateMovie() {
  fetch("http://localhost:3011/movies/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 3,
      title: "El padrino parte II",
      genres: ["Crime", "Drama"],
      year: 1994,
      director: "Frank Darabont",
      actors: [
        "Tim Robbins",
        "Ricard el profe",
        "Bob Gunton",
        "William Sadler",
        "Clancy Brown",
        "Gil Bellows",
      ],
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      message = JSON.stringify(json.message);
      console.log(json);
      showResults(json);
    });
}

function showResults(json) {
  myList.innerHTML = "";
  json.forEach((element) => {
    lisItem = document.createElement("li");
    ide = document.createElement("h4");
    title = document.createElement("h2");
    year = document.createElement("h3");
    director = document.createElement("h3");
    genres = document.createElement("h3");
    actors = document.createElement("h3");
    ide.innerHTML = "ID: " + element.id;
    title.innerHTML = "Title: " + element.title;
    year.innerHTML = "Year: " + element.year;
    director.innerHTML = "Director: " + element.director;
    genres.innerHTML = "Genres: " + element.genres;
    actors.innerHTML = "Actors: " + element.actors.actors;
    lisItem.appendChild(ide);
    lisItem.appendChild(title);
    lisItem.appendChild(year);
    lisItem.appendChild(director);
    lisItem.appendChild(genres);
    lisItem.appendChild(actors);
    myList.appendChild(lisItem);
  });
}
