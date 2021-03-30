import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerUpcoming from '../components/BannerUpcoming'

import pic08 from '../assets/images/rsac-logo-2-border.png'

const Upcoming = (props) => (
    <Layout>
        <Helmet>
            <title>Upcoming - Supply Chain Sandbox</title>
            <meta name="description" content="Upcoming" />
        </Helmet>

        <BannerUpcoming />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <Link to="https://www.rsaconference.com/usa" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>RSA Conference 2021</h3>
                            </header>
                            <p>RSA Conference 2021 is the best place to strengthen your resilience. From the first day to the last, you’ll gain actionable insights from hundreds of traditional and immersive sessions, collaborate and share different perspectives with peers that will spark new approaches, and see the latest technology.
                            </p>
                            <p>
                            RSAC 2021 offers so much to help you grow your knowledge and advance your career. Explore everything it can offer, then join us May 17–20. 
                            </p>
                            <ul className="actions">
                                <li><Link to="https://www.rsaconference.com/usa" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Upcoming