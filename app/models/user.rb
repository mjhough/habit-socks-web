class User < ApplicationRecord
  has_many :orders
  has_many :products, through: :orders

  attr_accessor :stripe_id
end
