class Createupdate < ActiveRecord::Migration[5.2]
  def change
     add_column :shows, :photoUrl, :string
     add_column :shows, :tall_photoUrl, :string
     add_column :shows, :square_photoUrl, :string
     add_column :episodes, :videoUrl, :string
     add_column :episodes, :photoUrl, :string


  end
end
