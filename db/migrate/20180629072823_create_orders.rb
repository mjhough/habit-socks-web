class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.datetime :fulfilled_date
      t.integer :quantity
      t.integer :total
      t.belongs_to :user
    end
  end
end
