const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9 col-md-10">
                    <div class="text-muted">${post.topic}</div>
                    <div>
                        <span class="fw-bold">
                            ${post.userName}
                            <span class="fa-stack" style="font-size: 0.5em">
                              <i class="fas fa-circle fa-stack-2x"></i>
                              <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                            </span>
                        </span>
                        <span class="text-muted">
                            - ${post.time}
                        </span>
                    </div>
                    <div class="fw-bold">${post.title}</div>
                </div>
                <div class="col-3 col-md-2">
                    <img src="${post.image}"
                         width="85"
                         height="85"
                         class="float-end"
                         style="border-radius: 10px"/>
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;
