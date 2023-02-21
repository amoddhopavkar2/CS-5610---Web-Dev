import { Link, Route } from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import { Routes } from "react-router-dom";
import HomeComponent from "./home";

function Tuiter() {
  return (
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <Nav />
        <NavigationSidebar active="explore" />
      </div>
      <div
        className="col-10 col-md-10 col-lg-7 col-xl-6"
        style={{ position: "relative; padding:0px;border:1px solid black" }}
      >
        <Routes>
          <Route path="explore" element={<ExploreComponent />} />
          <Route path="home" element={<HomeComponent />} />
        </Routes>
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList />
      </div>
    </div>
  );
}
export default Tuiter;
