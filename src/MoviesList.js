import { Link } from "react-router-dom";

const MoviesList = (props) => {

    var movies = props.m;
    var title = props.title;
    // const handleDelete=props.handleDelete;

    return (
        <div className="home-content">
            <h1> {title} </h1>
            {
                movies.map((movie) =>
                (
                    <div className='movies-list'>
                        <Link to={`/movieDetail${movie.id}`}>
                            <h1>{movie.mName}</h1>
                            <h2>Hero: {movie.hero}</h2>
                            <h2>Genere: {movie.genere}</h2>
                            {/* <button onClick={()=>{handleDelete(movie.id)}}>delete</button> */}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
export default MoviesList;