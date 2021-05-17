import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import pic11 from '../assets/images/jeopardy.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Supply Chain Sandbox - Jeopardy</title>
            <meta name="description" content="Supply Chain Sandbox" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Supply Chain Sandbox: Jeopardy</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                            <dl>
                                <dt>Overview</dt>
                                <dd>
                                With a range of categories, team up with other players to test your supply chain and risk management knowledge in a fun, interactive game of jeopardy. 
                                <ul>
                                <li>Location: RSA Supply Chain Sandbox</li>
                                <li>Time: 2:15PM PT / 5:15PM ET</li>
                                    <li><Link to="https://www.rsaconference.com/usa/agenda/session/supply-chain-jeopardy">https://www.rsaconference.com/usa/agenda/session/supply-chain-jeopardy</Link></li>
                                </ul>
                                </dd>
                                <dt>Scoring Rules</dt>
                                <dd>
                                    <ol>
                                        <li>Teams will take turns selecting a question from the Category board as well as providing the answer.</li>
                                        <li>Round is over if the Team provides the correct answer.</li>
                                        <li>If incorrect, the first person to type the correct answer from the other team can take the points.</li>
                                        <li>Teams failing to provide an answer when the time is up will not score and the first person to type the correct answer from the other teams can take the points.</li>
                                    </ol>
                                </dd>
                                <dt>Vision</dt>
                                <dd>
                                <p>
                                Supply chain management is a critical factor of business success. As software increasingly drives business value, organizations can achieve greater efficiency, agility, and effectiveness - as well as security - by applying similar principles to their cyber supply chains. Vulnerabilities in components such as processors, network stacks, and platform dependencies have shown that supply chain visibility is shallow, while risk runs deep.
                                </p>
                                <p>
                                In a just-in-time-delivery world, cybersecurity disruptions to traditional logistics and planning. Not Petya halted operations for shipping companies worldwide, providing a vivid illustration of how dependent organizations have become on their partners’ cybersecurity for physical, as well as digital, assets.
                                </p>
                                </dd>
                                <dt>Other Resources</dt>
                                <dd>
                                <ul>
                                    <li><Link to="https://www.cisa.gov/supply-chain">CISA’s ICT Supply Chain Risk Management webpage</Link></li>
                                </ul>
                                </dd>
                            </dl>
                </div>
            </section>
        </div>
    </Layout>
)

export default Generic