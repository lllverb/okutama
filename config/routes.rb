Rails.application.routes.draw do
  root 'okutama#index'
  resources :okutama, only: [] do
    collection do 
      get 'access'
    end
  end
  resources :contacts, only: [:new, :create]
end
