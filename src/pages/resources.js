import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic02 from '../assets/images/drew-coffman-D1Pa78SnrH0-unsplash.jpg'

const Resources = (props) => (
    <Layout>
        <Helmet>
            <title>Supply Chain Sandbox - Resources</title>
            <meta name="description" content="Supply Chain Sandbox" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Resources and Further Reading</h1>
                    </header>
                    <span className="image right"><img src={pic02} alt="" /></span>
                      <ul>
                        <li><a href="https://www.atlanticcouncil.org/in-depth-research-reports/issue-brief/supply-chain-in-the-software-era/">Atlantic Council - Software in the Supply Chain Era</a></li>
                        <li><a href="https://www.cisa.gov/sites/default/files/publications/ICT%20Supply%20Chain%20Risk%20Management%20Task%20Force%20Interim%20Report%20%28FINAL%29.pdf">DHS ICT Supply Chain Risk Management task force</a></li>
                        <li><a href="https://ntia.gov/sbom">NTIA Software Bill of Materials project</a></li>
                        <li><a href="https://www.eei.org/issuesandpolicy/Documents/EEI%20Law%20-%20Model%20Procurement%20Contract%20Language%20(Version%202)_031919.pdf">Model contract language</a></li>
                        <li><a href="https://www.pnnl.gov/main/publications/external/technical_reports/PNNL-28661.pdf">Guide on Cybersecurity Procurement Language in Task Order Requests for Proposals for Federal Facilities</a></li>
                        <li><a href="https://www.energy.gov/sites/prod/files/2014/04/f15/CybersecProcurementLanguage-EnergyDeliverySystems_040714_fin.pdf">Energy Sector Control Systems Working Group (ESCSWG)</a></li>
                        <li><a href="https://www.us-cert.gov/sites/default/files/documents/Procurement_Language_Rev4_100809_S508C.pdf">Department of Homeland Security: Cyber Security Procurement Language for Control Systems</a></li>
                        <li><a href="https://www.energy.gov/sites/prod/files/oeprod/DocumentsandMedia/SCADA_Procurement_Language.pdf">Cyber Security Procurement Language for Control Systems Version 1.8</a></li>
                        <li><a href="http://www.nema.org/Standards/Pages/Supply-Chain-Best-Practices.aspx#download">National Electrical Manufacturers Association (NEMA) Supply Chain Best Practices Guideline</a></li>
                        <li><a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-161.pdf">NIST 800-161 Supply Chain Risk Management Practices for Federal Information Systems and Organizations</a></li>
                        <li><a href="https://doi.org/10.6028/NIST.SP.800-30r1">NIST 800-30 Guide for Conducting Risk Assessments</a></li>
                      </ul>

                </div>
            </section>
        </div>

    </Layout>
)

export default Resources
