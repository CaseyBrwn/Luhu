class CreateAddIndex < ActiveRecord::Migration[5.2]
  def change
    create_table :add_indices do |t|
      add_index :episodes, :show_id
    end
  end
end
