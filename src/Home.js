import MoviesList from "./MoviesList";
import useFetch from "./useFetch";
// import { useState, useEffect } from 'react'

const Home = () => {

    let { data: movies, pending, error } = useFetch("http://localhost:5000/movies");
    // let obj=useFetch();
    // let movies=obj.movies;
    // let pending=obj.pending;
    // let error=obj.error;



    // var [movies, setMovies] = useState(null);
    // var [pending, setPending] = useState(true);
    // let [error, setError] = useState(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:4000/movies")
    //             // fetch will be resolved and returns response object
    //             .then((response) => {
    //                 if (response.ok === false) {
    //                     throw Error("data that you are finding is not present")
    //                 }
    //                 return response.json();
    //             })
    //             // accepts response from resolve method and returns json data through json()
    //             .then((data) => { setMovies(data); setPending(false) })
    //             // accepts data returned from json() and set it to movies
    //             .catch((error) => { setError(error.message); setPending(false) })                            

    //     }, 2000);
    // }, [])


    return (

        <div>
            {error && <h1> {error} </h1>}
            {/* {pending && <h1>Loading....</h1>} */}
            {pending && <div id="loader">
                <h1>Loading...</h1>
            </div>}
            {movies && <MoviesList m={movies} title="ALL MOVIES...."


            />}
        </div>

    );
}

export default Home;