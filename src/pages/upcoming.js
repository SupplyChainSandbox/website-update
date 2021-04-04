import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerUpcoming from '../components/BannerUpcoming'

import pic08 from '../assets/images/rsac-sandbox-banner.jpg'

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
                    <Link to="https://www.rsaconference.com/usa?utm_source=sbox-supchainsbox&utm_medium=referral&utm_campaign=standard-textad-us2021" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>RSA Conference 2021</h3>
                            </header>
                            <p>
                            <b>Discover the weak Supply Chain links at RSAC Sandbox.</b>
                            </p>
                            <p>Tuesday, May 18 | 9:20 AM – 3:40 PM PT</p>
                            <p>
                            Supply chain management is a critical factor of business success. Explore the impacts of supply chain issues and learn concepts and approaches to manage cyber supply chains more
                            effectively. <Link to="https://www.rsaconference.com/usa?utm_source=sbox-supchainsbox&utm_medium=referral&utm_campaign=standard-textad-us2021">Register today</Link> for
                            RSAC 2021 All Access Pass.
                            </p> 
                            <ul className="actions">
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