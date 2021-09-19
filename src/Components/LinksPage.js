import React from 'react'
import "./LinksPage.css"
import { GoLinkExternal } from "react-icons/go";
function LinksPage() {
    return (
        <div>

            <div className="links">
                <div className="link-single">
                    <p className="link-text">Total link with Any Issue</p>
                    <p className="link-num">100</p>
                </div>
                <div className="link-single">
                    <p className="link-text">Last Check Completed At</p>
                    <p className="link-num">20/08/2021</p>
                </div>
                <div className="link-single">
                    <p className="link-text">Check Frequency</p>
                    <p className="link-num">Daily</p>
                </div>
            </div>

            <div className="link-main-container">
                <div className="linktsub-container ">
                    <h1>Broken Internal Links</h1>
                    <ul className="chart">
                        <li className="chart-list link-overflow">https://stackoverflow.com/questions/57456743/how-should-i-split-grids-in-css
                            <GoLinkExternal className="elink-icons" />
                            <span>5 times Used</span></li>
                        <li className="chart-list link-overflow">https://stackoverflow.com/questions/57456743/how-should-i-split-grids-in-css <span>5 times Used</span></li>
                        <li className="chart-list link-overflow">https://stackoverflow.com/questions/57456743/how-should-i-split-grids-in-css <span>5 times Used</span></li>
                        <li className="chart-list link-overflow">https://stackoverflow.com/questions/57456743/how-should-i-split-grids-in-css <span>5 times Used</span></li>

                    </ul>
                </div>
                <div className="linktsub-container ">
                    <h1>Broken External Links</h1>
                    <ul className="chart">
                        <li className="chart-list link-overflow">https://stackoverflow.com/questions/57456743/how-should-i-split-grids-in-css
                            <GoLinkExternal className="elink-icons" />
                            <span>5 times Used</span></li>
                        <li className="chart-list link-overflow">https://stackoverflow.com/questions/57456743/how-should-i-split-grids-in-css <span>5 times Used</span></li>
                        <li className="chart-list link-overflow">https://stackoverflow.com/questions/57456743/how-should-i-split-grids-in-css <span>5 times Used</span></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LinksPage
