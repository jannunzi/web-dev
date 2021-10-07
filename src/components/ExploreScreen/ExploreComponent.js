import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11" style="position: relative">
                    <i class="fa fa-search position-absolute"
                       style="left: 25px; top: 11px"></i>
                    <input placeholder="Search Twitter" class="ps-5 form-control rounded-pill mb-2 col-11"/>
                </div>
                <div class="col-1">
                    <a href="setting.html">
                        <i class="mt-1 fa fa-2x fa-cog float-end"></i>
                    </a>
                </div>
            </div>
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">
                        For you
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">
                        Sports
                    </a>
                </li>
                <li class="nav-item d-sm-none d-md-inline">
                    <a class="nav-link" href="entertainment.html">
                        Entertainment
                    </a>
                </li>
            </ul>
            <div class="position-relative mb-2">
                <img src="../../../images/Starship-Mk1-Day.jpg" width="100%"/>
                <h2 class="fw-bold ms-2 text-light position-absolute bottom-0">SpaceX's Starship</h2>
            </div>
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
