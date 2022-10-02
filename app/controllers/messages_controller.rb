class MessagesController < ApplicationController
  def index; end

  def random_message
    @messages = Message.all
    @random_message = Message.all.sample

    render json: @random_message
  end
end
