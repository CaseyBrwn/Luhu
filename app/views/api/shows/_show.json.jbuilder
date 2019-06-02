  json.extract! @show, :id, :title, :description
    json.photoUrl url_for(@show.photo)
    json.episode_ids do
        json.array! @show.episodes.ids
    end