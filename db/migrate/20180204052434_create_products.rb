class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :image_url
      t.string :name
      t.string :description
      t.integer :inventory, default: 0
      t.integer :price
      t.belongs_to :order
      t.belongs_to :user
    end
  end
end
