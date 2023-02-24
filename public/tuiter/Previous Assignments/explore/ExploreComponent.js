import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
            <div class="row d-flex align-items-center">
                <div class="wd-search-bar">
                    <i class="fa-sharp fa-solid fa-magnifying-glass wd-magnifying-glass-icon"></i>
                    <input class="wd-search-bar-text-input" type="text" placeholder="Search Twitter">
                </div>
                <div class="col-2 wd-magnifying-glass-icon">
                    <i class="fas fa-cog wd-settings-cog"></i>
                </div>
            </div>
            <ul class="nav nav-tabs mt-1 mb-1">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        For You
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1">
                        Sports
                    </a>
                </li>
                <li class="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link " href="#" tabindex="-1">
                        Entertainment
                    </a>
                </li>
            </ul>
            
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
