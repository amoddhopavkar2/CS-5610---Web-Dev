import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import posts from "../PostSummaryList/posts.js";
import tweets from "../Tweets/tweets.js";
import TuitComponent from "../Tweets/index.js";

function homeComponent() {
  $("#wd-homescreen").append(`
    <div class="row">
        <div class="col-xl-2 col-xxl-2 col-sm-2 col-md-2 col-lg-1">
            ${NavigationSidebar("home")}
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10" style="margin-top:8px">
        ${tweets.map((post) => `${TuitComponent(post)}`).join("")}
        </div>
        <div class="d-none d-lg-block d-xl-block d-xxl-block col-4">
            <ul class="list-group">
                ${posts
                  .map(
                    (post) =>
                      `<li class="list-group-item">${PostSummaryItem(
                        post
                      )}</li>`
                  )
                  .join("")}
            </ul>
        </div>
    </div>  
    `);
}
$(homeComponent);
