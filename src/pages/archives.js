import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerArchives from '../components/BannerArchives'

import pic08 from '../assets/images/xipu-li-nNCLvTQdaiE-unsplash.jpg'
import pic09 from '../assets/images/joshua-ang-Gf_KqXHU-PY-unsplash.jpg'

const Archives = (props) => (
    <Layout>
        <Helmet>
            <title>Archives - Supply Chain Sandbox</title>
            <meta name="description" content="Archives" />
        </Helmet>

        <BannerArchives />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <Link to="https://supplychainsandbox.org/2020-usa/" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>RSA Conference 2020 USA</h3>
                            </header>
                            <p>
                           The Supply Chain Sandbox at the RSA Conference 2020 USA was an interactive environment, with hands on games and demonstrations that illustrated
                           supply chain issues, as well as concepts and approaches to manage them more effectively.
                           </p>
                            <ul className="actions">
                                <li><Link to="https://supplychainsandbox.org/2020-usa/" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="https://www.rsaconference.com/apj" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>RSA Conference 2020 APJ</h3>
                            </header>
                            <p>
                            RSAC 2020 APJ is available On Demand. Watch three days of keynotes and 60+ sessions across 10 tracks at your convenience. Access to this actionable learning is free. See the expert insights from the region’s leading cybersecurity event!
                            </p>
                            <ul className="actions">
                                <li><Link to="https://www.rsaconference.com/apj" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Archives