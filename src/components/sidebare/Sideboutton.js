import React from 'react';
import ReactDOM from 'react-dom';

const Sideboutton = () => {

    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
    // function openNav() {
    //     ReactDOM.render(document.getElementById('mySidebar')).style.width = "250px";
    //     ReactDOM.render(document.getElementById('main')).style.width = "250px";
    // }
    return (
        <div>
            <div id="main">
                <button class="openbtn" onClick={openNav()}>&#9776; Open Sidebar</button>
                <h2>Collapsed Sidebar</h2>
                <p>Content...</p>
            </div>
        </div>
    );
};

export default Sideboutton;