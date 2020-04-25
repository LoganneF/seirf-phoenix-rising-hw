class TweetsController < ApplicationController
    def index
        render(json: {tweets: Tweet.all})
    end

    def show
        tweet = Tweet.find(params[:id])
        render(json: {tweet: tweet})
    end
end