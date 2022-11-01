import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="input-group mb-2 rounded-circle">
              <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
              <input class="form-control" id="search" placeholder="Search Tuiter" type="text"/>
              <i class="fa-solid fa-gear fa-2x my-auto ms-3 text-primary"></i>
            </div>
           <ul class="nav mb-2 nav-tabs">
              <li class="nav-item"><a class="nav-link active" href="#">For You</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Trending</a></li>
              <li class="nav-item"><a class="nav-link" href="#">News</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Sports</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
           </ul>
           <div class="card text-white">
              <img class="img-fluid card-img-top" src="../../images/starship.jpeg"/>
              <h1 class="card-img-overlay d-flex align-items-end"><b>SpaceX's Starship</b></h1>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;