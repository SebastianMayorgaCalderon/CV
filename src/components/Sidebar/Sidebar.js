import React from 'react'

import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar flex column aling-items-center">
            <div class="rotation-wrapper-inner">
                <div className="sidebar__title-wrapper flex column justify-content-flex-end ">
                    <div className="sidebar__title-name-wrapper flex column aling-items-flex-end ">
                        <h2>SEBASTIAN</h2>
                        <h2>MAYORGA</h2>
                    </div>
                    <div className="sidebar__title-ocupation-wrapper flex column aling-items-flex-end ">
                        <span>SOFTWARE</span>
                        <span>DEVELOPER</span>
                    </div>
                </div>
            </div>
            <h1>Hello there</h1>
        </div>
    )
}

export default Sidebar
