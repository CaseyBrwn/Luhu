# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  genre_type :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
    validates :genre_type, presence: true
    
    has_many :genres_joins
    has_many :shows, through: :genres_joins


end
