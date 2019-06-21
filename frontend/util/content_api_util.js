

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

export const fetchAllEpisodes = () =>{ 
 
    return (
            $.ajax({
                method: "GET",
                url: `api/episodes`
            })
)};

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

export const fetchAllGenres = () => (
    $.ajax({
        method: "GET",
        url: `/api/genres`
    })
)

export const fetchGenre = (genre_id) => (
    $.ajax({
        method: "GET",
        url: `/api/genres/${genre_id}`
    })
)


