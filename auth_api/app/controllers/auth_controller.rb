# app/controllers/auth_controller.rb
class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = encode_token({ user_id: user.id })
      render json: { user: user, token: token }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end
end
