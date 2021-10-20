import React from "react";
const NavigationSidebar = (
  {
      active = 'explore'
  }) => {
    const isActive = (active, path) => `list-group-item ${active === path ? 'active' : ''}`;
    const halfSizeFont = {
        "fontSize": "0.5em"
    };
    return(
      <>
          <div className="list-group">
              <a className="list-group-item"
                 href="#">
                  <i className="fab fa-twitter"></i>
              </a>
              <a className={isActive(active, 'home')}
                 href="../HomeScreen/index.html">
                  <i className="fa fa-home"></i>
                  <span className="d-none d-xl-inline">Home</span>
              </a>
              <a className={isActive(active, 'explore')}
                 href="../ExploreScreen/index.html">
                  <i className="fa fa-hashtag"></i>
                  <span className="d-none d-xl-inline">Explore</span>
              </a>
              <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}
                 href="notifications.html">
                  <i className="fa fa-bell"></i>
                  <span className="d-none d-xl-inline">Notifications</span>
              </a>
              <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`}
                 href="messages.html">
                  <i className="fa fa-envelope"></i>
                  <span className="d-none d-xl-inline">Messages</span>
              </a>
              <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}
                 href="bookmarks.html">
                  <i className="fa fa-bookmark"></i>
                  <span className="d-none d-xl-inline">Bookmarks</span>
              </a>
              <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`}
                 href="lists.html">
                  <i className="fa fa-list"></i>
                  <span className="d-none d-xl-inline">Lists</span>
              </a>
              <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`}
                 href="profile.html">
                  <i className="fa fa-user"></i>
                  <span className="d-none d-xl-inline">Profile</span>
              </a>
              <a className={`list-group-item ${active === 'more' ? 'active' : ''}`}
                 href="more.html">
                <span className="fa-stack"
                      style={halfSizeFont}>
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-ellipsis-h fa-inverse fa-stack-1x"></i>
                </span>
                  <span className="d-none d-xl-inline">More</span>
              </a>
          </div>
          <div className="d-grid mt-2">
              <a href="tweet.html"
                 className="btn btn-primary btn-block rounded-pill">
                  Tweet
              </a>
          </div>
      </>
    );
}

export default NavigationSidebar;
