import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
  return `
            <div class="position-relative">
                <img src="../assets/spacex.png" width="100%">
                <h5 class="position-absolute text-white ms-2">
                    Music . Last night</h5>
                <h3 class="fw-bold  position-absolute bottom-0 left-0 text-white ms-2">
                    SpaceX's Starship </h3>
            </div>
            <ul class="list-group">
            ${posts
              .map(
                (post) =>
                  `<li class="list-group-item">${PostSummaryItem(post)}</li>`
              )
              .join("")}
            </ul>
 `;
};
export default PostSummaryList;
