import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetail = () => {

    let { id } = useParams();
    let history = useHistory();

    let { data: movie, pending, error } = useFetch(`http://localhost:5000/movies/${id}`);

    const handleDelete = () => {
        fetch(`http://localhost:5000/movies/${id}`, { method: "DELETE" })
            .then(() => {
                alert("this movie has been removed from the list");
                history.goBack();
            })
    }

    return (
        <div className="movie-detail">
            {error && <h1> {error} </h1>}
            {pending && <div id="loader">
                <h1>Loading...</h1></div>}

            {movie &&
                <div>
                    <img src={movie.poster} alt="not found" />
                    <h1>Movie Name: {movie.mName}</h1>
                    <h1>Hero: {movie.hero}</h1>
                    <h1>Genere:{movie.genere}</h1>
                    <iframe width="560" height="315" src={movie.trailer}
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <br />
                    <button id="btn" onClick={handleDelete}>Delete</button>
                </div>}
        </div>
    );
}

export default MovieDetail;