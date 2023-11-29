class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.string :content
      t.integer :complete

      t.timestamps
    end
  end
end
