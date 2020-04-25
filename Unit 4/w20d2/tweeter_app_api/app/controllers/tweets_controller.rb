class TweetsController < ApplicationController
    def index
        render(json: {tweets: Tweet.all})
    end

    def show

    end
end