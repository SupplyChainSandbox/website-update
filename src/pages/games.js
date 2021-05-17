import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerGames from '../components/BannerGames'

import pic08 from '../assets/images/supply_chain_sprint_attract.png'
import pic09 from '../assets/images/beer_game.jpg'
import pic10 from '../assets/images/helena-yankovska-sJOy9pveFbU-unsplash.jpg'
import pic11 from '../assets/images/quad-blocks-quiz.jpg'
import pic12 from '../assets/images/jeopardy.jpg'
import pic13 from '../assets/images/quad-block-logo-1600.png'


const Games = (props) => (
    <Layout>
        <Helmet>
            <title>Games - Supply Chain Sandbox</title>
            <meta name="description" content="Games" />
        </Helmet>

        <BannerGames />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Supply Chain Sprint</h3>
                            </header>
                            <p>A classic 8-bit game, updated to reflect the relay race that is modern supply chains.</p>
                            <ul className="actions">
                                <li><Link to="http://supplychainsprint.com/" className="button">Play the game</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/quadblocks" className="image">
                        <img src={pic11} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>QuadBlocksQuiz: Supply Chain Edition <span> <img src={pic13} width="300" height="auto" /> </span> </h3>
                            </header>
                            <p>Explore cybersecurity's most important emerging strategic focus with the digital era's most beloved game.</p>
                            <p>We proudly present the SupplyChainSandbox edition of QuadBlocksQuiz - a reimagined take on classic Tetrominoes where playful
                               spatial negotiations are infused with real-life Trivia challenges from the world of supply chain security.</p>
                            <p>Compete against other RSA attendees to top the leaderboard and win prizes ranging from cyber-security, software development, 
                                and communication consulting support to a guided absinthe experience from an award-winning mixologist</p>
                            <ul className="actions">
                                <li><Link to="/quadblocks" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic12} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>SupplyChainSandbox Jeopardy</h3>
                            </header>
                            <p>Protecting your organization’s information in a digitally-connected world means understanding not only your organization’s immediate supply chain, but also the security of the extended ecosystem and all entities involved. The SupplyChainSandbox Jeopardy group is educating the public about supply chain risk management through an interactive fun and educational experience.</p>
                            <ul className="actions">
                                <li><Link to="https://github.com/SupplyChainSandbox/supplychainjeopardy" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Beer Games</h3>
                            </header>
                            <p>Several different interpretations of the classic MIT supply chain game.</p>
                           <ul>
                              <li><a href="https://beergameapp.com/">The Beergame App</a></li>
                              <li><a href="https://www.supplychain-academy.net/beer-game/">Supply Chain Academy</a></li>
                              <li><a href="https://beergameapp.com/">A.T. Kearney (iPhone)</a></li>
                              <li><a href="https://beergame.opexanalytics.com/#/">Opex Analytics</a></li>
                            </ul> 
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>SBOM Mixology</h3>
                            </header>
                            <p>The SupplychainSanbox Sipping Bill of Materials group's intent is to provide a Bill of Materials in a fun and educational way by applying the concept to mixology!</p>
                            <ul className="actions">
                                <li><Link to="/sbom" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Games
