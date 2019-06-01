json.array! @shows do |show|
    json.extract! show, :title, :description
    json.photoUrl url_for(post.photo)
end