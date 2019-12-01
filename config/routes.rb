Rails.application.routes.draw do
  root 'okutama#index'
  resources :contacts, only: [:new, :create]
end
