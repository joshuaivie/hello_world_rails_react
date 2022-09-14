class Message < ApplicationRecord
  # Validations
  validates :message, presence: true, length: { minimum: 5, maximum: 2000 }
end
