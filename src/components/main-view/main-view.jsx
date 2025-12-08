import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
      {
        id: 1,
        title: "Pride & Prejudice",
        image: "https://m.media-amazon.com/images/I/71GspoOXkeL._SL1500_.jpg",
        summary:
          "Five sisters in an English family deal with issues of marriage, morality, and misconceptions when two wealthy bachelors arrive in their neighborhood.",
        genre: "Romance",
        director: "Joe Wright",
      },
      {
        id: 2,
        title: "The Scent of Green Papaya",
        image: "https://m.media-amazon.com/images/I/71t6r3Y3WtL._SL1077_.jpg",
        summary:
          "In 1950s Saigon, a young servant girl, Mui, begins work for a wealthy but troubled Vietnamese family, finding beauty in her attentive daily routines.",
        genre: "Drama",
        director: "Trần Anh Hùng",
      },
      {
        id: 3,
        title: "A Room with a View",
        image: "https://m.media-amazon.com/images/I/819maqMLyOL._SL1500_.jpg",
        summary:
          "A young Englishwoman, Lucy, on a tour of Italy must choose between a charming, free-spirited man she meets there and a wealthy, priggish suitor back home.",
        genre: "Romantic Comedy, Drama",
        director: "James Ivory",
      },
      {
        id: 4,
        title: "Stand by Me",
        image: "https://m.media-amazon.com/images/I/81PmlArGyfS._SL1500_.jpg",
        summary:
          "Four young friends in a small Oregon town go on an unforgettable, two-day search for the body of a missing boy, leading to a journey of self-discovery.",
        genre: "Adventure, Humor, Family",
        director: "Rob Reiner",
      },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </div>
    );
};