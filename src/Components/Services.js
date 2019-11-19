import React from 'react'

class Services extends React.Component {
    render() {
        return(
            <div className="services-section white-bg">
                <h1>Services</h1>
                <div className="left">
                    <h2>Our Main Services</h2>
                    <ul>
                        <li><span className="item">Mens Haircut</span> <span>$24</span></li>
                        <li><span className="item">Hot Shave</span> <span>$21</span></li>
                        <li><span className="item">Beard Trim</span> <span>$16</span></li>
                        <li><span className="item">Cut & Beard</span> <span>$36</span></li>
                        
                    </ul>
                </div>
                <div className="right">
                    <h2>Special Services</h2>
                    <ul>
                    <li><span className="item">Razor Fade</span> <span>$26</span></li>
                    <li><span className="item">Kids</span> <span>$21</span></li>
                    <li><span className="item">Hair Lining</span> <span>$13</span></li>
                    <li><span className="item">Women's Cut-Full</span> <span>$25-35</span></li>
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default Services;