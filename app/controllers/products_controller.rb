class ProductsController < ApplicationController
  def all
    products = Product.all
    render json: ProductSerializer.new(products).serialized_json, status: 201
  end

  def get
    product = Product.find(params[:id])
    options = {}
    options[:include] = [:reviews]
    render json: ProductSerializer.new([product],
                                       options).serialized_json, status: 200
  end

  def index
    @products = Product.all
  end

  def show
    @product_id = params[:id]
  end
end
