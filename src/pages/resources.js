import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import pic02 from '../assets/images/drew-coffman-D1Pa78SnrH0-unsplash.jpg'
import fullwheel from '../assets/images/fullwheel.jpg'
import plan from '../assets/images/plan.jpg'
import identify from '../assets/images/identify.jpg'
import rfx from '../assets/images/rfx.jpg'
import contract from '../assets/images/contract.jpg'
import delivery from '../assets/images/delivery.jpg'
import retire from '../assets/images/retire.jpg'

const Resources = (props) => (
    <Layout>
        <Helmet>
            <title>Supply Chain Sandbox - Resources</title>
            <meta name="description" content="Supply Chain Sandbox" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
            <Link to="/generic" className="image">
                        <img src={fullwheel} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Wheel of SOURCING</h3>
                            </header>
                            <p>Explore cybersecurity's most important emerging strategic focus with the digital era's most beloved game.</p>
                            <p>We proudly present the SupplyChainSandbox edition of QuadBlocksQuiz - a reimagined take on Tetris where playful
                               spatial negotiations are infused with real-life Trivia challenges from the world of supply chain security.</p>
                            <ul className="actions">
                                <li><Link to="/quadblocks" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            
            <section id="two" className="spotlights">

        
                <section>
                    <Link to="/generic" className="image">
                        <img src={plan} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Plan</h3>
                            </header>
                            <p>Before engaging on a significant acquisition or development of a new solution, it is important for the organization to develop a team to consider not only discrete business or operational requirements, but also to assess risks related to the organization, considering both the authorized or unauthorized use of the solution along with operational, financial, and regulatory risks. This will most likely require the formation of a multi-disciplinary team to include Legal, Sourcing, Business, and Information Security.</p>
                           <ul>
                              <li><a href="https://doi.org/10.6028/NIST.IR.8276"> Key Practices in Cyber Supply Chain Risk Management: Observations from Industry</a></li>
                              <li><a href="https://nvlpubs.nist.gov/nistpubs/ir/2020/NIST.IR.8286A-draft.pdf"> Identifying and Estimating Cybersecurity Risk for Enterprise Risk Management (ERM)</a></li>
                              <li><a href="https://csrc.nist.gov/CSRC/media/Publications/sp/800-53b/final/documents/sp800-53b-control-baselines.xlsx"> SP 800-53B Control Baselines</a></li>
                              <li><a href="https://doi.org/10.6028/NIST.SP.800-53r5"> Security and Privacy Controls for Information Systems and Organizations</a></li>
                              <li><a href="https://us-cert.cisa.gov/sites/default/files/documents/Procurement_Language_Rev4_100809_S508C.pdf"> Department of Homeland Security Cyber Security Procurement Lang. for Control Systems</a></li>
                              <li><a href="https://www.pnnl.gov/main/publications/external/technical_reports/PNNL-28661.pdf"> Guide on Cybersecurity Procurement Lang - Requests for Proposals for Federal Facilities </a></li>
                              <li><a href="https://www.energy.gov/sites/prod/files/2014/04/f15/CybersecProcurementLanguage-EnergyDeliverySystems_040714_fin.pdf"> Cybersecurity Procurement Language for Energy Delivery Systems </a></li>
                            </ul> 
                        </div>
                    </div>
                </section>
                
                <section>
                    <Link to="/generic" className="image">
                        <img src={identify} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Identity Service</h3>
                            </header>
                            <p> Determine Qualifying Criteria. Perform Market Analysis. Models are available to assist entities identify and evaluate necessary supplier security practices.  In addition, entities should consider methods to verify or certify the scope, strength, and efficacy of supplier practices. </p>
                            <ul>
                              <li><a href="https://www.natf.net/docs/natf/documents/resources/supply-chain/supplier-cyber-security-assessment-model.pdf"> Supplier Cyber Security Assessment Model </a></li>
                             </ul> 
                        </div>
                    </div>
                </section>
               
                <section>
                    <Link to="/generic" className="image">
                        <img src={rfx} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>RFX</h3>
                            </header>
                            <p>Entities can choose from high level measures using structured responses to a survey of 60 security criteria, use a questionnaire of 300 questions, or choose a hybrid approach based on assessment of risk.</p>
                            <ul>
                              <li><a href="https://www.natf.net/docs/natf/documents/resources/supply-chain/natf-cyber-security-criteria-for-suppliers.xlsx"> NATF Cyber Security Criteria for Suppliers </a></li>
                              <li><a href="https://www.natf.net/docs/natf/documents/resources/supply-chain/energy-sector-supply-chain-risk-questionnaire---formatted.xlsx"> Energy Sector questionnaire </a></li>
 </ul> 
                        </div>
                    </div>
                </section>
                
                <section>
                    <Link to="/quadblocks" className="image">
                        <img src={contract} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Contract Management</h3>
                            </header>
                            <p>Entities can leverage a variety of existing tools to enumerate and manage risk using contractual mechanisms.  Does the supplier support SBOM? What methods will the supplier use to integrate SBOM into their development process? What methods will the entity use to incorporate SBOM information into an overall risk management program? </p>
                            <ul>
                              <li><a href="https://www.eei.org/issuesandpolicy/Documents/EEI%20Law%20-%20Model%20Procurement%20Contract%20Language.pdf">Model Procurement Contract Language Addressing Cybersecurity Supply Chain Risk V2</a></li>
  </ul> 
                        </div>
                    </div>
                </section>
                
                <section>
                    <Link to="/generic" className="image">
                        <img src={delivery} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Delivery and Maintenance</h3>
                            </header>
                            <p>Secure Delivery, add to ongoing vulnerability management program.  Certain high-risk components may be deserving of additional controls to manage risk associated with the delivery pathway from the assembly/manufacturing facility to the purchaser.  Moreover, after the products are installed and integrated into operations, the entity using the products should consider methods to identify and mitigate new (or newly discovered) vulnerabilities</p>
                            <ul>
                            <li><a href="https://www.nerc.com/comm/CIPC_Security_Guidelines_DL/Security_Guideline-Secure_Equipment_Delivery.pdf"> Information and guidance on secure delivery of high risk materials</a></li>
                              <li><a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf"> Building and maintaining an incident response program</a></li>
                              <li><a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1800-25.pdf"> Data Integrity: Identifying and Protecting Assets Against Ransomware and Other Destructive Events</a></li>
                              <li><a href="https://www.maritime-executive.com/article/tracking-and-chain-of-custody-the-difference  "> SP 800-53B Control Baselines</a></li>
         </ul> 
                        </div>
                    </div>
                </section>
                
                <section>
                    <Link to="/generic" className="image">
                        <img src={retire} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Retire </h3>
                            </header>
                            <p>Ensure solution is retired/recycled in a manner to protect sensitive information/Environmentally Responsible Manner.   It is helpful to consider the implications of retirement/cessation of the use of solutions.  What methods will be used to neutralize sensitive PII or proprietary business information? Certain components may have sensitive operational or configuration information that should be eliminated.  Entities should also consider the environmental impact of destruction/recycling options for components.</p>
                            <ul>
                              <li><a href="https://doi.org/10.6028/NIST.SP.800-88r1"> Guide</a></li>
                              <li><a href="https://www.energy.gov/sites/prod/files/2014/04/f15/CybersecProcurementLanguage-EnergyDeliverySystems_040714_fin.pdf"> Cybersecurity Procurement Language for Energy Delivery Systems </a></li>
                            </ul> 
                        </div>
                    </div>
                </section>
             
            </section>
        </div>

    </Layout>
)

export default Resources
