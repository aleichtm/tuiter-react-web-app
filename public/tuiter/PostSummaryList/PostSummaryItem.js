const PostSummaryItem = (post) => {
    return (`
      <div class="list-group-item">
        <div class="row">
          <div class="col">
            ${post.topic}<br/>
            <b>${post.userName} <i class="fa-solid fa-circle-check"></i></b> - ${post.time}<br/>
            <b>${post.title}</b>
          </div>
          <div class="float-right col-auto"><img src=${post.image} width="75px" height="75px"/></div>
        </div>
      </div>
 `);
}
export default PostSummaryItem;