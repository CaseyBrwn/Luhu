# == Schema Information
#
# Table name: user_shows
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  show_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserShow < ApplicationRecord 
    validates :user_id, :show_id, presence: true

    belongs_to :user

    belongs_to :show


end
