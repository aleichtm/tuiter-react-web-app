const WhoToFollowListItem = (who) => {
    return (`
       <div class="list-group-item clear">
          <div class="float-start me-2">
            <img class="rounded-circle" height="50px" width="50px" src=${who.avatarIcon}/>
          </div>
          <div class="float-start">
            <strong>${who.userName} <i class="fa-solid fa-circle-check"></i><br/></strong>
            ${who.handle}
          </div>
          <div class="float-end">
            <button class="btn btn-primary btn-block rounded-pill mt-1">Follow</button>
          </div>
       </div>
 `);
}
export default WhoToFollowListItem;