const TuitComponent = (tuit) => {
  return `
        <div class="wd-tuit-container">
            <div class="wd-B__image">
                <img class="wd-profile-picture" src=${tuit.profilePicture}>
            </div>
            <div class="wd-tuit-content-container">
                <div class="wd-tuit-justify-space-between">
                    <div class="wd-width-88pct">
                        <h4 class="wd-user-name">${tuit.username} <i class="fas fa-check-circle" aria-hidden="true"></i></h3> 
                        <h4 class="wd-tuiter-handle">${tuit.tuiterHandle}</h4>
                        <h4 class="wd-tuiter-handle">&nbsp;<span class="wd-dot">&#183;</span>&nbsp;${tuit.timestamp}</h4>
                    </div>
                    <div class="wd-tuit-more-options">
                        ...
                    </div>
                </div>
                <div class="wd-tuit-tuit">
                            ${tuit.tuit}
                </div>
                <div class="wd-tuit-preview-container" id="image-info">
                    <div class="wd-tuit-preview-image">
                        <img src=${tuit.tuitPreviewImage} width="100%"/>
                    </div>
                            <div class="wd-tuit-preview-title">
                                ${tuit.tuitPreviewTitle}
                            </div>
                            <div class="wd-tuit-preview-content">
                                ${tuit.tuitPreviewContent}
                            </div>
                </div>
                <div class="wd-tuit-buttons-container">
                    <div class="wd-post-info">
                            <p class="wd-lightgray">
                                <a href="#" class="wd-lightgray"><i class="fa-regular fa-comment"></i><p class="wd-numbers">${tuit.tuitComments}</p></a>
                            </p>
                    </div>
                    <div class="wd-post-info">
                        <p class="wd-lightgray">
                            <a href="#" class="wd-lightgray"><i class="fa-solid fa-retweet"></i><p class="wd-numbers">${tuit.tuitRetweets}</p></a>
                        </p>
                    </div>
                    <div class="wd-post-info">
                        <p class="wd-lightgray">
                            <a href="#" class="wd-lightgray"> <i class="fa-solid fa-heart wd-red"></i><p class="wd-numbers">${tuit.tuitLikes}</p></a>
                        </p>    
                    </div>
                    <div class="wd-post-info">
                        <p class="wd-lightgray">
                            <a href="#" class="wd-lightgray"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    `;
};
export default TuitComponent;
