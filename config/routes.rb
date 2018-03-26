Rails.application.routes.draw do
  root to: 'home#index'
  get '/about', to: 'home#about'
  get '/donate', to: 'home#donate'

  resources :products, only: %i(show)

  get '/api/products', to: 'products#all'
  get '/api/products/:id', to: 'products#get'
  post '/api/products/:id/reviews', to: 'reviews#create'

  get '/cart', to: 'carts#index'
end
