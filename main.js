// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo
// scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
// bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
// film trovato:
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto

let app = new Vue ({
  el: "#app",
  data: {
    movies: [],
    search: "",
  },
  methods: {
    filteredMovie(){
      fetch("https://api.themoviedb.org/3/search/movie?api_key=57ed826d9a49253a27b0ca966c4158d0&query=" + this.search)
      .then(response => response.json())
      .then(res => {
          this.movies = res.results;
      });
    },
    created() {
    this.filteredMovie();
  }
  },
})
