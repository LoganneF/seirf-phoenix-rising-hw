###########
# Players #
###########

class Player 
    attr_accessor :name, :hand, :bankroll

    def initialize name, hand, bankroll
        @name = name
        @bankroll = 100
        @hand = []
    end

end

#CREATING PLAYERS

human = Player.new "Human", [], 100
computer = Player.new "Computer", [], 1000

###########
# The Deck #
###########

#Create an empty array that will hold your card objects. This can just be an array, it does not need to be a class.
 CardDeck = []

###########
# CARDS   #
###########

class Card
    attr_accessor :face, :value, :suit
    Suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    Values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    def initialize suit, face
        @suit = suit
        @value = value
    end
end
