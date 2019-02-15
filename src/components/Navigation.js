import React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div class="uk-container" uk-sticky="bottom: #offset">
            <nav class="uk-navbar-container" uk-navbar>
                <div class="uk-navbar-left">

                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/MainArticle">MainArticle</NavLink></li>
                    </ul>

                </div>
            </nav>

        </div>

    )
}

export default Navigation;