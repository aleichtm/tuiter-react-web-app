import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({
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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={50} height={50} className="float-end rounded-circle"
                         src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div className="float-end col-1">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(
                               tuit._id)}></i>
                    </div>
                    <div className="col-11 float-start"><span
                        className="fw-bolder">{tuit.userName}</span> <i
                        className="bi bi-patch-check-fill text-primary"></i> {tuit.handle} - {tuit.time}
                    </div>
                    <div className="clearfix">{tuit.tuit}</div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>);
};
export default TuitItem;