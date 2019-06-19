
json.genre do 
    json.extract! @genre, :id, :genre_type, :show_ids
end

json.set! "shows" do
    @genre.shows.each do |show|
        json.set! show.id do
              json.extract! show, :id, :title, :description, :episode_ids, :genre_ids
                json.photoUrl url_for(show.photo)
                json.tall_photoUrl url_for(show.tall_photo)
                json.square_photoUrl url_for(show.square_photo)
        end
        
    end
    
end