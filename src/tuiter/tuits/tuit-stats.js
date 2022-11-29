import React from "react";

const TuitStats = ({
                       tuit = {
                           "_id": 123,
                           "topic": "Space",
                           "userName": "SpaceX",
                           "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                           "time": "2h",
                           "image": "tesla.png",
                           "liked": true,
                           "replies": 345,
                           "retuits": 321,
                           "likes": 1234,
                           "handle": "@spacex",
                           "tuit": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed. Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass. Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass."
                       }
                   }) => {
    return (<div className="row">
        <div className="col-3 float-start">
            <i className="bi bi-chat"></i> {tuit.replies}
        </div>
        <div className="col-3 float-start">
            <i className="bi bi-arrow-repeat"></i> {tuit.retuits}
        </div>
        <div className="col-3 float-start">
            <i className={`${tuit.liked ? "bi bi-suit-heart-fill text-danger"
                                        : "bi bi-suit-heart"}`}></i> {tuit.likes}
        </div>
        <div className="col-3 float-start">
            <i className="bi bi-share"></i>
        </div>
    </div>);
};
export default TuitStats;