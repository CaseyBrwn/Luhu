# == Schema Information
#
# Table name: genres_joins
#
#  id         :bigint           not null, primary key
#  show_id    :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GenresJoin < ApplicationRecord
    validates :show_id, :genre_id, presence: true

    belongs_to :show

    belongs_to :genre


end
