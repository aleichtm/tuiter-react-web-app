import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item" href="/tuiter"><i className="bi bi-twitter"></i> Tuiter</a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}
                href="/tuiter">
                <i className="bi bi-house-door-fill"></i> Home
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}
               href="#">
                <i className="bi bi-hash"></i> Explore
            </a>
            <a className={`list-group-item
                    ${active === 'labs'?'active':''}`}
               href="../labs">
                <i className="bi bi-asterisk"></i> Labs
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}
                href="#">
                <i className="bi bi-bell-fill"></i> Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}
               href="#">
                <i className="bi bi-envelope-fill"></i> Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}
               href="#">
                <i className="bi bi-bookmark-fill"></i> Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}
               href="#">
                <i className="bi bi-list-ul"></i> Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}
               href="#">
                <i className="bi bi-person-circle"></i> Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}
               href="#">
                <i className="bi bi-caret-down-square-fill"></i> More
            </a>
        </div>
    );
};

export default NavigationSidebar;