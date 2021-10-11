import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-6">
                ${PostList()}
            </div>
            <div class="col-4">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);