# frozen_string_literal: true

class SnippetsController < ApplicationController
  before_action :fetch_snippet, only: %i[show edit update destroy]

  def index
    @snippets = Snippet.all
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: { sid: @snippet.sid, content: @snippet.content } }
    end
  end

  def new
    @snippet = Snippet.new
  end

  def create
    @snippet = Snippet.new(snippet_params)
    if @snippet.save
      render :edit
    else
      render :new
    end
  end

  def edit; end

  def update
    @snippet.assign_attributes(snippet_params)
    @snippet.save
    render :edit
  end

  def destroy
    @snippet.destroy
    redirect_to snippets_path, status: 302
  end

  def test
    render :test, layout: "snippets"
  end

  private

  def fetch_snippet
    @snippet ||= Snippet.find(params[:sid])
  end

  def snippet_params
    params.require(:snippet).permit(Snippet::PERMITTED_PARAMS)
  end
end
