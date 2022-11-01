import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
      <ul class="list-group">
        <strong class="list-group-item">Who to Follow</strong>
        ${who.map(who => WhoToFollowListItem(who)).join('')}
      </ul>
 `);
}
export default WhoToFollowList;