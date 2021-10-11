const PostItem = (post) => {
    return(`
        <div style="flex: 0 0 auto;">
<!--            <div style="height: 1000px" class="float-start me-3">-->
<!--                <img src="../../../images/elon.jpg"-->
<!--                 style="width:48px; border-radius: 24px"/>            -->
<!--            </div>-->
            <img src="../../../images/elon.jpg"
             style="width:48px; border-radius: 24px"/>            
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
            <div className="fw-bold">${post.title}</div>
            <p class="fw-bold">${post.content}</p>
        </div>
    `);
}

export default PostItem;
