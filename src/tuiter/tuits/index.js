import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = (who) => {
    const tuitsArray = useSelector(state => state.tuits)
    return (<ul className="list-group">
            {tuitsArray.map(tuit => <TuitItem
                key={who._id} tuit={tuit}/>)}
        </ul>);
};
export default TuitsList;