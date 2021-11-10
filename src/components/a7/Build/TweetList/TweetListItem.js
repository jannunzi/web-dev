import React from "react";
import "./tweet.css";
import TweetStats from "./TweetStats";
import { useDispatch } from "react-redux";

const TweetListItem = ({ tweet }) => {
    const dispatch = useDispatch();
    const deleteTweetClickHandler = () => {
        dispatch({ type: "delete-tweet", tweet });
    };
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img
                        className="rounded-circle wd-avatar-image"
                        src={tweet["logo-image"]}
                        alt="logo"
                    />
                </div>
                <div className="col-11 ps-4">
                    <i
                        onClick={deleteTweetClickHandler}
                        className="fa fa-remove fa-pull-right"
                    ></i>
                    <span className="fw-bold">{tweet.userName}</span>
                    {tweet.verified && (
                        <i className="ms-1 fas fa-badge-check"></i>
                    )}
                    <span className="ms-1 text-secondary">@{tweet.handle}</span>
                    <div>{tweet.tweet}</div>
                    {tweet.attachments && tweet.attachments.image && (
                        <img
                            src={tweet.attachments.image}
                            className="mt-2 wd-border-radius-20px"
                            style={{ width: "100%" }}
                            alt="attachment"
                        />
                    )}
                    {tweet.attachments && tweet.attachments.video && (
                        <iframe
                            width="100%"
                            height="350px"
                            className="mt-2 wd-border-radius-20px"
                            style={{ width: "100%" }}
                            src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                    <TweetStats tweet={tweet} />
                </div>
            </div>
        </li>
    );
};

export default TweetListItem;
