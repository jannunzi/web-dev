import React from "react";

const TweetStats = ({tweet}) =>
    <div className="row mt-2">
        <div className="col">
            <i className="far fa-comment me-2"></i>
            {tweet.stats.comments}
        </div>
        <div className="col">
            <i className="fas fa-retweet me-2"></i>
            {tweet.stats.retweets}
        </div>
        <div className="col">
            <i className="far fa-heart me-2"></i>
            {tweet.stats.likes}
        </div>
        <div className="col">
            <i className="fas fa-external-link-alt me-2"></i>
        </div>
    </div>

export default TweetStats;
