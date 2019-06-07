  json.extract! @show, :id, :title, :description, :episode_ids, :photoUrl, :tall_photoUrl, :square_photoUrl
    # json.photoUrl url_for(@show.photo)
    # json.tall_photoUrl url_for(@show.tall_photo)
    # json.square_photoUrl url_for(@show.square_photo)
    # json.episode_ids do
    #     json.array! @show.episodes.ids
    # end