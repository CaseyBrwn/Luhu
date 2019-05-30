# == Schema Information
#
# Table name: episodes
#
#  id             :bigint           not null, primary key
#  show_id        :integer          not null
#  title          :string           not null
#  description    :string           not null
#  episode_number :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Episode < ApplicationRecord
    validates :show_id, :title, :description, :episode_number, presence: true

    belongs_to :show

    has_one_attached :photo

    has_one_attached :video


end
