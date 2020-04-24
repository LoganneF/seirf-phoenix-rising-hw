class AddToBelongs < ActiveRecord::Migration[6.0]
  def change
    add_column :vehicles, :belongs_to, :characters
  end
end
