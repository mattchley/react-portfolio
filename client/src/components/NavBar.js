import React from "react";

function Navbar(props) {
    return (
        <header>
    <div class="top">
                <nav class="navbar navbar-expand-lg navbar-light bg-#ffffff">
                    <div class="container">
                        <div class="logo">
                            <a class="navbar-brand">Matthew Atchley</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navigator">
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="https://mattchley.github.io/">About</a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="https://mattchley.github.io/portfolio.html">Portfolio</a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="https://mattchley.github.io/Contact.html">Contact Me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}


export default Navbar;