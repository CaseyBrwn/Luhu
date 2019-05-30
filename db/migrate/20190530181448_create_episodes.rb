class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.integer :show_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.integer :episode_number, null: false
      t.timestamps
    end
  end
end
