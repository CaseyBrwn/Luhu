# == Schema Information
#
# Table name: shows
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Show < ApplicationRecord
    validates :title, :description, presence: true

    has_many :episodes

    has_one_attached :photo

    has_one_attached :tall_photo


end
