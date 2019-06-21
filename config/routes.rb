Rails.application.routes.draw do
  
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :shows, only: [:index, :show]
    resources :episodes, only: [:show, :index]
    resources :movies, only: [:index, :show]
    resources :usershows, only: [:create, :destroy]
    resources :genres, only: [:index, :show]
  end

end
