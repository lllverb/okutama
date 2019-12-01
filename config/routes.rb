Rails.application.routes.draw do
  root 'okutama#index'
  get 'contacts/new'
end
