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
                            <p>Tuesday, June 7th through Thursday, June 9th</p>
                            <p>
Supply chain management is a critical factor of business success. Explore the impacts of supply chain issues and learn concepts and approaches to manage cyber supply chains more effectively. Join us in the Supply Chain Village Sandbox from Tuesday, June 7 through Thursday, June 9.
                            </p> 
                            <ul className="actions">
                                <li><Link to="https://www.rsaconference.com/usa/agenda?utm_source=sb-supchain&utm_medium=referral&utm_campaign=textad-us2022" className="button">see the agenda</Link></li>
                                <li><Link to="https://www.rsaconference.com/usa?utm_source=sb-supchain&utm_medium=referral&utm_campaign=textad-us2022" className="button">register</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Upcoming
