import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerUpcoming from '../components/BannerUpcoming'

import pic08 from '../assets/images/rsac-sandbox-banner-2022.jpg'

const Upcoming = (props) => (
    <Layout>
        <Helmet>
            <title>Upcoming - Supply Chain Sandbox</title>
            <meta name="description" content="Upcoming" />
        </Helmet>

        <BannerUpcoming />

        <div id="main">
            <section id="rsac2021" className="spotlights">
                <section>
                    <Link to="https://www.rsaconference.com/usa?utm_source=sb-supchain&utm_medium=referral&utm_campaign=textad-us2022" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>RSA Conference 2022</h3>
                            </header>
                            <p>
                            <b>Discover the weak Supply Chain links at RSAC Sandbox.</b>
                            </p>
                            <p>Tuesday, February 8th through Thursday, February 10th</p>
                            <p>
Supply chain management is a critical factor of business success. Explore the impacts of supply chain issues and learn concepts and approaches to manage cyber supply chains more effectively. Join us in the Supply Chain Village Sandbox from Tuesday, February 8 through Thursday, February 10. Plus, <Link to="https://www.rsaconference.com/usa/agenda">register today</Link> using code 32USBSCVFD to save $150 off your RSAC 2022 Full Conference Pass. Open to Full Conference and Expo Plus passholders only.
                            </p> 
                            <ul className="actions">
                                <li><Link to="https://www.rsaconference.com/usa/agenda/full-agenda#q=sbx8&sort=%40eventstart%20ascending" className="button">see the agenda</Link></li>
                                <li><Link to="https://www.rsaconference.com/usa?utm_source=sbox-supchainsbox&utm_medium=referral&utm_campaign=standard-textad-us2021" className="button">register</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Upcoming
