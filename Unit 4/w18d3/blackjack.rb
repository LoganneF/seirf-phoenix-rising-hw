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
# CARDS   #
###########

class Card
    attr_accessor :face, :value, :suit
   
    def initialize face, value, suit
        @face = face
        @suit = suit
        @value = value
    end
end

###########
# The Deck #
###########

#create deck of 52 cards
#create an array of face values, suits and an empty array for cards
class Deck
    def initialize
        @faces = ["clubs", "spades", "hearts", "diamonds"]
        @suits = [*(2..10), "jack", "queen", "king", "ace"]
        @cards = []
    end

    #loop through each face
    #then loop through each suit for that face
    #to generate 1 of every combo
    @faces.each do |face|
        #if face is number make value = face
        if face.class == Integer
            value = face
        elsif face == 'Ace'
            value = 11
        #everything else has value of 10
        else 
            value = 10
        end
        @suits.each do |suit|
            @cards << Card.new(face, suit, value)
        end
    end

#shuffle the cards
@cards.shuffle!

    #create function w/i deck class to deal correct number of cards
    def deal (num, player)
        num.times {@cards.shift.generate_card(player)}
    end
end

################################
# Generating cards for players #
################################
#take parameter 'player' and add to that players hand

def generate_card (player)
    new_card = Card.new face, suit, value
    player.hand << new_card
end
