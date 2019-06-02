class Api::MoviesController < ApplicationController


def index
    @movies = Movie.with_attached_photo.with_attached_video.all
    render :index
end

def show
    @movie = Movie.find_by(id: params[:id])
    render :show
end


end

