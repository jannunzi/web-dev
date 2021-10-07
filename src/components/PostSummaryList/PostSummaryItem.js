import React from "react";

const PostSummaryItem = (post) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-9 col-md-10">
                    <div className="text-muted">{post.topic}</div>
                    <div>
                        <span className="fw-bold">
                            {post.userName}
                            <span className="fa-stack" style="font-size: 0.5em">
                              <i className="fas fa-circle fa-stack-2x"></i>
                              <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                            </span>
                        </span>
                        <span className="text-muted">
                            - {post.time}
                        </span>
                    </div>
                    <div className="fw-bold">{post.title}</div>
                </div>
                <div className="col-3 col-md-2">
                    <img src={post.image}
                         width="85"
                         height="85"
                         className="float-end"
                         style="border-radius: 10px"/>
                </div>
            </div>
        </li>
    );
}

export default PostSummaryItem;
