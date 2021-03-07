import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/folu-eludire-O9Epo1PwX5A-unsplash.jpg'
import pic02 from '../assets/images/drew-coffman-D1Pa78SnrH0-unsplash.jpg'
import pic03 from '../assets/images/the-climate-reality-project-Hb6uWq0i4MI-unsplash.jpg'
import pic04 from '../assets/images/joshua-sortino-71vAb1FXB6g-unsplash.jpg'
//import pic05 from '../assets/images/pic05.jpg'
//import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Supply Chain Sandbox"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Games</h3>
                                <p>The Supply Chain Sandbox has developed board and video games to teach supply chain principles, and so have others.</p>
                            </header>
                            <Link to="/games" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Resources</h3>
                                <p>Resources and Further Reading</p>
                            </header>
                            <Link to="/resources" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Upcoming</h3>
                                <p>Upcoming conferences and live events.</p>
                            </header>
                            <Link to="/upcoming" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Archives</h3>
                                <p>Archives of past conference material.</p>
                            </header>
                            <Link to="/archives" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Supply Chain Sandbox</h2>
                            </header>



                            <p>
                            Supply chain management is a critical factor of 
                            business success. As software increasingly drives
                            business value, organizations can achieve greater
                            efficiency, agility, and effectiveness - as well as
                            security - by applying similar principles to their
                            cyber supply chains. Vulnerabilities in components
                            such as processors, network stacks, and platform
                            dependencies have shown that supply chain visibility
                             is shallow, while risk runs deep. 
                            </p>
                            <p>
                            In a just-in-time-delivery world, cybersecurity
                            disruptions to traditional logistics and planning.
                            Not Petya halted operations for shipping companies
                            worldwide, providing a vivid illustration of how
                            dependent organizations have become on their
                            partners’ cybersecurity for physical, as well as
                            digital, assets.
                            </p>
                            <p>
                            The Supply Chain Sandbox is an interactive
                            environment, with hands on games and demonstrations
                            that illustrate supply chain issues, as well as
                            concepts and approaches to manage them more
                            effectively. Learn concepts like the Software Bill
                            of Materials, a framework for pinpointing cyber
                            supply chain risk, and other principles - all while
                            having more fun than you thought you could at a
                            cybersecurity conference!
                            </p>

                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex