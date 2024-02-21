import React from "react";

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="http://localhost:3000">&nbsp;&nbsp;&nbsp;사원 관리 시스템</a>
                    <a className="navbar-brand" href="http://localhost:3000/admin">&nbsp;&nbsp;&nbsp;사원 관리 어드민</a>
                </nav>
            </header>

        </div>
    )
}

export default HeaderComponent;