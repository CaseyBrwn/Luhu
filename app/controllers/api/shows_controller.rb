class Api::ShowsControler < ApplicationController

    def index
        @shows = Show.all
        render :index
    end


end