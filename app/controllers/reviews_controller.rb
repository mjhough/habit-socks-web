class ReviewsController < ApplicationController
  def create
    product = Product.find(params[:id])
    review = product.reviews.create(content: params[:content])
    render json: review
  end
end
