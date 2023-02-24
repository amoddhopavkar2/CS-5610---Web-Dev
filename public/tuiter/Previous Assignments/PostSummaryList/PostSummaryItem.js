const PostSummaryItem = (post) => {
  return `
        <div class="row">
            <div class="col-8">
                <div class="fw-bolder d-flex" style="
                flex-direction: column;
            ">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <h6>${post.userName} <i class="fas fa-check-circle"></i>
                    <span class="text-secondary"> - ${post.time}</span></h6>
                </div>
                <div class=" fw-bolder">
                    ${post.title}
                </div>
            </div>
            <div class="col-4">
                <img class="float-end rounded-3" src=${post.image} width="100px" height="100px">
            </div>
        </div>
 `;
};
export default PostSummaryItem;
