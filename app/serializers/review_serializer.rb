class ReviewSerializer
  include FastJsonapi::ObjectSerializer

  belongs_to :product
  attributes :content
end
