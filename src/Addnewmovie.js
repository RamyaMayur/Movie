import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Addnewmovie = () => {

    const [mName, setmName] = useState("")

    // let mName=useRef();

    const [hero, setHero] = useState("")
    const [genere, setGenere] = useState("")
    const [poster, setPoster] = useState("")
    const [trailer, setTrailer] = useState("")

    let history = useHistory();

    let { data: movies } = useFetch("http://localhost:5000/movies")
    const handleSubmit = (e) => {
        e.preventDefault();

        let newMovie = { mName, hero, genere, poster, trailer }

        fetch("http://localhost:5000/movies",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMovie)
            }
        )

            .then(() => {
                alert("the data has been added");
                history.push(`/movieDetail${(movies[movies.length - 1].id) + 1}`)
                // history.push takes us to new page after giving the values for movies, it doesn't takes us to the home page
            })
    }
    return (
        <div className="create-movie">
            <h1>Add a new movie to the list</h1>
            <form onSubmit={handleSubmit}>

                <label>Movie Name: </label>
                <input type="text" placeholder="Enter the Movie Name" required value={mName}
                    onChange={(e) => { setmName(e.target.value); console.log(mName); }} />
                <label>Hero Name: </label>
                <input type="text" placeholder="Enter the Hero Name" required value={hero}
                    onChange={(e) => { setHero(e.target.value); console.log(hero); }} />
                <label>Genere: </label>
                <input type="text" placeholder="Enter the Genere Type" required value={genere}
                    onChange={(e) => { setGenere(e.target.value); console.log(genere); }} />
                <label>Movie Poster Link: </label>
                <input type="text" placeholder="Paste the Poster Link" required value={poster}
                    onChange={(e) => { setPoster(e.target.value); console.log(poster); }} />
                <label>Movie Trailer Link: </label>
                <input type="text" placeholder="Paste the Trailer Link" required value={trailer}
                    onChange={(e) => { setTrailer(e.target.value); console.log(trailer); }} />
                <br />
                <input id="sub" type="submit" />

            </form>

        </div>
    );
}

export default Addnewmovie;