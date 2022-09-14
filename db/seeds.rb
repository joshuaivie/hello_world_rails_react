MESSAGES = ["Hello World", "Goodbye World", "Hello Again", "Goodbye Again", "Hello Again Again"].freeze

MESSAGES.each do |message|
  Message.create(message: message)
end