import React from 'react'
import rsaclogo from '../assets/images/rsac-logo-2022.png'

const BannerRsac = (props) => (
    <section id="bannerrsac" className="inner">
        <div className="inner">
            <header className="inner">
            </header>
            <div className="content">
            It's Cyber Monday and we're bringing back Early Bird pricing through December 3rd! <a href="https://www.rsaconference.com/usa?utm_source=sb-supchain&utm_medium=referral&utm_campaign=textad-us2022">Register today</a> using our <b>Cyber Monday Supply Chain Sandbox Code - 82USBSCVCM</b> and save on your RSAC USA 2022 Conference Passes! Remember to grab that Expo Plus or Full Conference pass to see us in the Supply Chain Sandbox this year!
                <span className="image main"><img src={rsaclogo} alt="" /></span>
                <ul className="actions">
                    <li><a href="https://www.rsaconference.com/usa/agenda?utm_source=sb-supchain&utm_medium=referral&utm_campaign=textad-us2022" className="button">see the agenda</a></li>
                    <li><a href="/upcoming" className="button next scrolly">Learn more</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default BannerRsac
