

export const fetchAllShows = () => (
    $.ajax({
        method: "GET",
        url: 'api/shows'
    })
);

export const fetchShow = (id) => (
    $.ajax({
        method: "GET",
        url: `api/shows/${id}`
    })
);

export const fetchEpisode = (id) => (
    $.ajax({
        method: "GET",
        url: `api/episodes/${id}`
    })
);

export const fetchAllMovies = () => (
    $.ajax({
        method: "GET",
        url: 'api/movies'
    })
);

export const fetchMovie = (id) => (
    $.ajax({
        method: "GET",
        url: `api/movies/${id}`
    })
);

export const addMyStuff = (show_id) => {

    return (
    
        $.ajax({
            method: "POST",
            url: `/api/usershows`,
            data: {show_id}
        })
    )
}

export const removeMyStuff = (show_id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/usershows/${show_id}`
    })
)

