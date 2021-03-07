import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-github"></span>
                        <h3>Github</h3>
                        <a href="https://github.com/SupplyChainSandbox">https://github.com/SupplyChainSandbox</a>
                    </div>
                </section>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:info@supplychainsandbox.org">info@supplychainsandbox.org</a>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
