

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

