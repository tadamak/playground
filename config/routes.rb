Rails.application.routes.draw do
  root to: "snippets#index"
  resources :snippets, path: "/", param: :sid, constraints: { sid: /[a-zA-Z0-9\-]{32,36}/ }

  get "todolist", to: "todolist#index"
end
