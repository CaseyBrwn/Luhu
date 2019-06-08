@shows.each do |show|
    json.set! show.id do 
        json.extract! show, :id, :title, :description
        json.photoUrl url_for(show.photo)
        json.tall_photoUrl url_for(show.tall_photo)
        json.episode_ids do
            json.array! show.episodes.ids
        end
    end
end
