Rails.application.routes.draw do
  get 'random_message' => 'messages#random_message'
  root "messages#index"
end
