# frozen_string_literal: true

class RouterController < ApplicationController
  def index
    render :index, layout: "router"
  end
end
