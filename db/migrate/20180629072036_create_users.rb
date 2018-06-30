class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :address
      t.string :state
      t.string :zip
      t.string :phone_number
      t.string :country
    end
  end
end
