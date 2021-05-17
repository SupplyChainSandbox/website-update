import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import pic11 from '../assets/images/quad-blocks-quiz.jpg'
import pic13 from '../assets/images/quad-block-logo-1600.png'

const QuadBlocks = (props) => (
    <Layout>
        <Helmet>
            <title>Supply Chain Sandbox - QuadBlocksQuiz</title>
            <meta name="description" content="Supply Chain Sandbox" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>QuadBlocksQuiz: Supply Chain Edition</h1>
                        <span> <img src={pic13} width="300" height="auto" /> </span>
                    </header>
                    <span className="image left"><img src={pic11} alt="" /></span>

                            <h2>Explore Cyber Security's Most Important Emerging Strategic Focus with the Digital Era's Most Beloved Game</h2>

                            <p>We proudly present the SupplyChainSandbox edition of QuadBlocksQuiz -
                               a reimagined take on Tetrominoes where playful spatial negotiations are infused with
                               real-life Trivia challenges from the world of supply chain security.</p>
                            <h3>Why Play?</h3>
                            <p>Whether you're attending RSAC because you "sell security" or "buy security," you can't afford
                               to pass on this love child of Tetrominoes and Trivia. More than abstract configurations of digital blocks,
                               our Tetrominoes spin-off envisions the classic arcade game as a potent metaphor for supply chain cyber security.
                               You can choose to let the blocks fall as they may and scramble to cope with the accumulated consequences at
                               a later point in time, or you can utilize savvy forecasting and informational superiority to address each
                               element as it appears on the horizon.</p>
                             <p>As recent events have shown, you are only as protected as the weakest link in your supply chain.
                               Guarding your organization’s information in a digitally-connected world
                               means understanding not only your organization’s immediate supply chain,
                               but also the security of the extended ecosystem and all entities involved.
                               Besides the obvious enterprise advantage of robust supply chain security knowledge,
                               the tidbits offered up here will reappear as in-game trivia challenges. </p>
                             <h3>Power Up!</h3>
                               <p>You don't need to be a supply chain expert - this game assumes you are a novice
                               and it teaches you what you need to know. You gain points by clearing rows as in a typical Tetrominoes game.
                               Here's the twist - you can answer quiz questions about supply chain both to gain points and to gain powerups.</p>
                              <p>Powerups help with classic Tetrominoes strategy but also are needed
                               to combat:</p>
                                <ul>
                                <li>vulnerabilities (unfortunate gaps in an otherwise functioning security paradigm)</li>
                                <li>licensing issues (extraneous blocks that gunk up the works)</li>
                                <li>cyber attacks(rapid changes in operating conditions that take over entire sections
                                    of the gameboard and speed the game up uncontrollably)</li>
                                <li>licensing lawsuits (tiresome procedures that gum up entire sections of the game board
                                    and slow the game to a snail's pace)</li>
                                </ul>
                               <p>Just like in real life, information powerups can prevent attacks
                                    and address emerging vulnerabilities as the operational environment speeds up and slows down around us.
                                    Play the game and find out!
                                </p>
                              <h3>Win! </h3>
                                <p>Leaderboard bragging rights and a better knowledge of supply chain security are solid prizes in their own right, 
                                but just in case the thrill of learning isn’t incentive enough, we’ve curated a raft of prizes that are a bit more enticing. 
                                Top scoring pragmatists can select from their choice of 
                                consulting hours from sFractal’s Chief Cyber Curmudgeon, Duncan Sparrell, 
                                software development expertise from Podii, or 
                                marketing/writing assistance from Briar Cutter. 
                                And if you’ve got those bases covered or you’re a dedicated epicurean, 
                                you can select from one of three custom cocktail prizes from Mixologist/Sommelier Chantal Tseng.</p>
                              <ul className="actions">
                                  <li><Link to="http://quadblockquiz.org:4000/" className="button">PLAY NOW</Link></li>
                              </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default QuadBlocks
