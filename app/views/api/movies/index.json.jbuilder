@movies.each do |movie|
    json.set! movie.id do 
        json.partial! './api/movies/movies', movie: movie
    end
end

