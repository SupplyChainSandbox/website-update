import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Supply Chain Sandbox - Learn More</title>
            <meta name="description" content="Supply Chain Sandbox" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Supply Chain Sandbox</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>

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

                </div>
            </section>
        </div>

    </Layout>
)

export default Generic