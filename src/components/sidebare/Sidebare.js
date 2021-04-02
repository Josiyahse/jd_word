import React from 'react';

const Sidebare = () => {

    // /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    // function closeNav() {
    //     document.getElementById("mySidebar").style.width = "0";
    //     document.getElementById("main").style.marginLeft = "0";
    // }

    return (
        <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick={closeNav()}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
        )
};

export default Sidebare;