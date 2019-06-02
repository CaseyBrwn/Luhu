class Api::ShowsController < ApplicationController

    def index
        @shows = Show.includes(:episodes).with_attached_photo
        render :index
    end

    def show
        @show = Show.includes(:episodes).with_attached_photo.find(params[:id])
        render :show
    end


end