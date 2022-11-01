import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
      <div class="list-group-item">
        ${posts.map(post => PostSummaryItem(post)).join('')}
      </div>
 `);
}
export default PostSummaryList;