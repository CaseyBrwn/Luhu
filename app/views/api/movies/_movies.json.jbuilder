

 json.extract! movie, :id, :title, :description
 json.photoUrl url_for(movie.photo)
 json.videoUrl url_for(movie.video)