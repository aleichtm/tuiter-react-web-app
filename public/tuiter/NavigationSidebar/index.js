const NavigationSidebar = () => {
    return (`
       <div class="list-group">
        <a href="../home.html" class="list-group-item"><i class="fa-brands fa-twitter"></i></a>
        <a href="../home.html" class="list-group-item"><i class="fa-solid fa-house-chimney"></i> Home</a>
        <a href="#" class="list-group-item active"><i class="fa-solid fa-hashtag"></i> Explore</a>
        <a href="#" class="list-group-item"><i class="fa-solid fa-bell"></i> Notifications</a>
        <a href="#" class="list-group-item"><i class="fa-solid fa-envelope"></i> Messages</a>
        <a href="../bookmarks" class="list-group-item"><i class="fa-solid fa-bookmark"></i> Bookmarks</a>
        <a href="#" class="list-group-item"><i class="fa-solid fa-list"></i> Lists</a>
        <a href="#" class="list-group-item"><i class="fa-solid fa-user"></i> Profile</a>
        <a href="#" class="list-group-item"><i class="fa-solid fa-circle-chevron-down"></i> More</a>
       </div>
       <div class="d-grid mt-2">
         <a href="../tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
       </div>
 `);
}
export default NavigationSidebar;