class Tweet < ApplicationRecord
    validates :content, presence: true, uniqueness: true
end