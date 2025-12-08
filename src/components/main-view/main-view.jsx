import { useState } from "react";
import { MovieCard } from "../main-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Pride & Prejudice",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg&f=1&nofb=1&ipt=af242cdb32fd25ef8b9f962bc2d95f06542d46916bb3c24b908bc34313cebebd",
            director: ([
                {
                    directorName:"Joe Wright"
                },
            ]),
            cast: ([
                {
                    actorName: "Keira Knightley",
                },
                {
                    actorName: "Matthew Macfadyen",
                },
                {
                    actorName: "Donald Sutherland",
                },
                {
                    actorName: "Brenda Blethyn"
                }
            ]),
            releaseDate: "2005-09-16"
        },
        {
            id: 2,
            title: "The Scent of Green Papaya",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYmQ1NzFhNDYtNThhMi00YjljLWFhM2QtMWMzYTI5NTVkMGQ2XkEyXkFqcGdeQXVyNjMwMjk0MTQ%40._V1_.jpg&f=1&nofb=1&ipt=e366e8c1bfb5e63c51eb4f44eb144598f40f4d87f4cb2f67532f566070d7d139",
            director: ([
                {
                    directorName: "Trần Anh Hùng"
                },
            ]),
            cast: ([
                {
                    actorName: "Tran Nu Yên-Khê",
                },
                {
                    actorName: "Man San Lu",
                },
                {
                    actorName: "Thi Loc Truong"
                }
            ]),
            releaseDate: "1993-12-08"
        },
        {
            id: 3,
            title: "A Room with a View",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYTEyYmE0M2MtZDQ1OC00MGUxLWI4OGMtM2M1ZjIyNDI0Y2Q4XkEyXkFqcGdeQXVyNjQ2MjQ5NzM%40._V1_.jpg&f=1&nofb=1&ipt=d29be2b413de8c8284f66d943c92c54e1b218529898af6454f3eea6ed2133a0c",
            director: ([
                {
                    directorName: "James Ivory"
                },
            ]),
            cast: ([
                {
                    actorName: "Maggie Smith",
                },
                {
                    actorName: "Helena Bonham Carter",
                },
                {
                    actorName: "Denholm Elliott",
                },
                {
                    actorName: "Julian Sands"
                }
            ]),
            releaseDate: "1986-12-19"
        },
        {
            id: 4,
            title: "Stand by Me",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fvz0w9BSehcqjDcJOjRaCk7fgJe7.jpg&f=1&ipt=6c111f776302588eeac5adf65db61eb6da8569ed1d30e44d9454a77ae5728767",
            director: ([
                {
                    directorName: "Rob Reiner"
                },
            ]),
            cast: ([
                {
                    actorName: "Wil Wheaton",
                },
                {
                    actorName: "River Phoenix",
                },
                {
                    actorName: "Jerry O'Connell",
                },
                {
                    actorName: "Corey Feldman"
                }
            ]),
            releaseDate: "1986-08-08"
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            <MovieView movie={ selectedMovie } onBackClick={ () => setSelectedMovie(null) } />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={ movie.id }
                    movie={ movie }
                    onMovieClick={ (newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};