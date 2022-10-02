Rails.application.routes.draw do
  get 'api/random_message' => 'messages#random_message'
  root "messages#index"
end
