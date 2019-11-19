import React from 'react'

class nav extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
                <a className="navbar-brand" href="#">
                    <img src="/imgs/rubens-logo.svg" />
                </a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Barbers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default nav