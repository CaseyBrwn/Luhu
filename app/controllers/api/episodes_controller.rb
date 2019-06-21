class Api::EpisodesController < ApplicationController

    def index
        @episodes = Episode.all
        render :index
    end

    def show
        @episode = Episode.find_by(id: params[:id])
        render :show
    end


end