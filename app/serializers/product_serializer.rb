class ProductSerializer
  include FastJsonapi::ObjectSerializer

  attributes :name, :image_url, :price, :description, :shipping_info, :inventory
  has_many :reviews
end
