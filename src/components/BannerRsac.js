import React from 'react'
import rsaclogo from '../assets/images/rsac-logo.png'

const BannerRsac = (props) => (
    <section id="bannerrsac" className="inner">
        <div className="inner">
            <header className="inner">
            </header>
            <div className="content">
                <span className="image main"><img src={rsaclogo} alt="" /></span>
                <ul className="actions">
                    <li><a href="https://www.rsaconference.com/usa/agenda/full-agenda#q=sbx8&sort=%40eventstart%20ascending" className="button">see the agenda</a></li>
                    <li><a href="/upcoming" className="button next scrolly">Learn more</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default BannerRsac
