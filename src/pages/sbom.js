import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/helena-yankovska-sJOy9pveFbU-unsplash.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Supply Chain Sandbox - Sipping Bill of Materials</title>
            <meta name="description" content="Supply Chain Sandbox" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Supply Chain Sandbox: Sipping Bill of Materials</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                            <h4>Sipping Bill of Materials</h4>
                            <h4>Location: RSA Supply Chain Sandbox</h4>
                            <h4>Time: 3PM PT / 6PM ET</h4>
                            <p>
                            After a long day thinking about supply chain security, join the Supply Chain Sandbox for drinks and a
                            casual chat. We'll show that the supply chain matters even for cocktails, as we collectively make
                            drinks and show that subtle differences in the ingredients can have a real impact on the quality of
                            the output. Participants can make drinks at home, review them, and share cyber-toasts.
                            </p>
                            <p>
                            Thanks to Copado for helping to make this happen!
                            </p>
                            <p>
                            You can just join to say hi, or bring your own favorite tipple. But if you want to play along, learn
                            a bit about cocktails and their supply chains, we recommend the following:
                            </p>
                            <p>
                            <u>Minimum to join the basics of the cocktails:</u>
                            </p>
                            <dl>
                                <dt>Alcohol</dt>
                                <dd>
                                    <ul>
                                        <li>Gin</li>
                                        <li>Dry Vermouth</li>
                                        <li>Dry or Medium Sherry</li>
                                        <li>Angostura or Orange bitters</li>
                                    </ul>
                                </dd>
                                <dt>Other ingredients</dt>
                                <dd>
                                    <ul>
                                        <li>Honey</li>
                                        <li>2 Lemons </li>
                                        <li>Ice</li>
                                    </ul>
                                </dd>
                                <dt>Equipment</dt>
                                <dd>
                                    <ul>
                                        <li>Something to squeeze juice from a lemon</li>
                                        <li>A measuring device that can measure in half ounces</li>
                                        <li>A large glass or shaker</li>
                                        <li>A strainer</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p>
                            <u>The full set of ingredients:</u>
                            </p>
                            <dl>
                                <dt>Alcohol</dt>
                                <dd>
                                    <ul>
                                    <li>Gin - two varieties</li>
                                        <ul>
                                        <li>London Dry gin (e.g. Beefeater or Bombay Sapphire)</li>
                                        <li>“Modern” gin (something less juniper based, e.g. Aviation, Bar Hill, etc)</li>
                                        </ul>
                                    <li>Dry Vermouth (Dolin recommended)</li>
                                    <li>Sherry - two varieties</li>
                                        <ul>
                                        <li>Fino sherry like Tio Pepe or Alexandro</li>
                                        <li>Amontillado or Olorosso sherry like Hidalgo Napoleon or Alexandro</li>
                                        </ul>
                                    <li>Orange bitters</li>
                                    <li>Angostura bitters</li>
                                    </ul>
                                </dd>
                                <dt>Other ingredients</dt>
                                <dd>
                                    <ul>
                                    <li>Honey syrup (mix equal parts hot water and honey, stir to combine, and cool)</li>
                                    <li>A chunk of fresh ginger, cut into slices</li>
                                    <li>2 Lemons </li>
                                    <li>Ice</li>
                                    </ul>
                                </dd>
                                <dt>Equipment</dt>
                                <dd>
                                    <ul>
                                    <li>Something to squeeze juice from a lemon</li>
                                    <li>A measuring device that can measure in half ounces</li>
                                    <li>Cocktail shaker with lid</li>
                                    <li>Stirring glass and spoon</li>
                                    <li>Muddler or wooden spoon</li>
                                    <li>A strainer</li>
                                    <li>Peeler</li>
                                    <li>Glassware: coupe glasses</li>
                                    </ul>
                                </dd>
                            </dl>
                </div>
            </section>
        </div>
    </Layout>
)

export default Generic