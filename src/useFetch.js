import { useState, useEffect } from 'react'

const useFetch = (resource) => {
    // sfc

    var [data, setData] = useState(null);
    var [pending, setPending] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {

        setTimeout(() => {
            fetch(resource)
                // fetch will be resolved and returns response object
                .then((response) => {
                    if (response.ok === false) {
                        throw Error("data that you are finding is not present")
                    }
                    return response.json();
                })
                // accepts response from resolve method and returns json data through json()
                .then((data) => { setData(data); setPending(false) })
                // accepts data returned from json() and set it to movies
                .catch((error) => { setError(error.message); setPending(false) })

        }, 2000);
    }, [])
    return ( {data, pending, error} );
}

export default useFetch;