class CreateProductOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :product_orders do |t|
      t.belongs_to :product
      t.belongs_to :order
    end
  end
end
