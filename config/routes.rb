Rails.application.routes.draw do

  root 'main#index'

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

  get '/main', to: 'main#index'

  resources :users do 
    resources :memberships
    resources :followers
    resources :schools
  end

  #     user_memberships GET    /users/:user_id/memberships(.:format)              memberships#index
  #                      POST   /users/:user_id/memberships(.:format)              memberships#create
  #  new_user_membership GET    /users/:user_id/memberships/new(.:format)          memberships#new
  # edit_user_membership GET    /users/:user_id/memberships/:id/edit(.:format)     memberships#edit
  #      user_membership GET    /users/:user_id/memberships/:id(.:format)          memberships#show
  #                      PATCH  /users/:user_id/memberships/:id(.:format)          memberships#update
  #                      PUT    /users/:user_id/memberships/:id(.:format)          memberships#update
  #                      DELETE /users/:user_id/memberships/:id(.:format)          memberships#destroy
  #       user_followers GET    /users/:user_id/followers(.:format)                followers#index
  #                      POST   /users/:user_id/followers(.:format)                followers#create
  #    new_user_follower GET    /users/:user_id/followers/new(.:format)            followers#new
  #   edit_user_follower GET    /users/:user_id/followers/:id/edit(.:format)       followers#edit
  #        user_follower GET    /users/:user_id/followers/:id(.:format)            followers#show
  #                      PATCH  /users/:user_id/followers/:id(.:format)            followers#update
  #                      PUT    /users/:user_id/followers/:id(.:format)            followers#update
  #                      DELETE /users/:user_id/followers/:id(.:format)            followers#destroy
  #         user_schools GET    /users/:user_id/schools(.:format)                  schools#index
  #                      POST   /users/:user_id/schools(.:format)                  schools#create
  #      new_user_school GET    /users/:user_id/schools/new(.:format)              schools#new
  #     edit_user_school GET    /users/:user_id/schools/:id/edit(.:format)         schools#edit
  #          user_school GET    /users/:user_id/schools/:id(.:format)              schools#show
  #                      PATCH  /users/:user_id/schools/:id(.:format)              schools#update
  #                      PUT    /users/:user_id/schools/:id(.:format)              schools#update
  #                      DELETE /users/:user_id/schools/:id(.:format)              schools#destroy
  #                users GET    /users(.:format)                                   users#index
  #                      POST   /users(.:format)                                   users#create
  #             new_user GET    /users/new(.:format)                               users#new
  #            edit_user GET    /users/:id/edit(.:format)                          users#edit
  #                 user GET    /users/:id(.:format)                               users#show
  #                      PATCH  /users/:id(.:format)                               users#update
  #                      PUT    /users/:id(.:format)                               users#update
  #                      DELETE /users/:id(.:format)                               users#destroy

  resources :schools do 
    resources :memberships
    resources :followers
    resources :styles
  end

#     school_memberships GET    /schools/:school_id/memberships(.:format)          memberships#index
#                        POST   /schools/:school_id/memberships(.:format)          memberships#create
#  new_school_membership GET    /schools/:school_id/memberships/new(.:format)      memberships#new
# edit_school_membership GET    /schools/:school_id/memberships/:id/edit(.:format) memberships#edit
#      school_membership GET    /schools/:school_id/memberships/:id(.:format)      memberships#show
#                        PATCH  /schools/:school_id/memberships/:id(.:format)      memberships#update
#                        PUT    /schools/:school_id/memberships/:id(.:format)      memberships#update
#                        DELETE /schools/:school_id/memberships/:id(.:format)      memberships#destroy
#       school_followers GET    /schools/:school_id/followers(.:format)            followers#index
#                        POST   /schools/:school_id/followers(.:format)            followers#create
#    new_school_follower GET    /schools/:school_id/followers/new(.:format)        followers#new
#   edit_school_follower GET    /schools/:school_id/followers/:id/edit(.:format)   followers#edit
#        school_follower GET    /schools/:school_id/followers/:id(.:format)        followers#show
#                        PATCH  /schools/:school_id/followers/:id(.:format)        followers#update
#                        PUT    /schools/:school_id/followers/:id(.:format)        followers#update
#                        DELETE /schools/:school_id/followers/:id(.:format)        followers#destroy
#          school_styles GET    /schools/:school_id/styles(.:format)               styles#index
#                        POST   /schools/:school_id/styles(.:format)               styles#create
#       new_school_style GET    /schools/:school_id/styles/new(.:format)           styles#new
#      edit_school_style GET    /schools/:school_id/styles/:id/edit(.:format)      styles#edit
#           school_style GET    /schools/:school_id/styles/:id(.:format)           styles#show
#                        PATCH  /schools/:school_id/styles/:id(.:format)           styles#update
#                        PUT    /schools/:school_id/styles/:id(.:format)           styles#update
#                        DELETE /schools/:school_id/styles/:id(.:format)           styles#destroy
#                schools GET    /schools(.:format)                                 schools#index
#                        POST   /schools(.:format)                                 schools#create
#             new_school GET    /schools/new(.:format)                             schools#new
#            edit_school GET    /schools/:id/edit(.:format)                        schools#edit
#                 school GET    /schools/:id(.:format)                             schools#show
#                        PATCH  /schools/:id(.:format)                             schools#update
#                        PUT    /schools/:id(.:format)                             schools#update
#                        DELETE /schools/:id(.:format)                             schools#destroy

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
