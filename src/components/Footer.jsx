import { Link } from "react-router-dom";
import '../App.css'

function Footer() {
    return (
        <> <div className="">

            <div className="foot-text">*Manga is only available in English. Crunchyroll Store 
                availability may vary by country.<br />**Video content availability 
                may vary by country. Price offers are only valid for subscribers 
                in applicable countries of residence. Use of Crunchyroll is subject 
                to our Terms of Service and Privacy Policy. Crunchyroll reserves all 
                rights under its Terms of Service, including future price changes.
            </div>
            <div className="grid-container">
                <div className="grid-item"></div>
                <div className="grid-item">Or create a <span className="footer-span">free account</span> and start watching.</div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>
                <div className="grid-item"> <span className="quest">Questions?</span> <br /> Visit our <span className="footer-span">Help Center</span> to learn more.</div>
                <div className="grid-item"></div>  
                <div className="grid-item"></div>
                <div className="grid-item">
                    <ul>
                        <li className="ls"><Link className="footer-link">Contact Us</Link></li>
                        <li className="ls"><Link className="footer-link">Terms of Service</Link></li>
                        <li className="ls"><Link className="footer-link">Portfolio Page</Link></li>
                    </ul>
                </div>
                <div className="grid-item"></div>  
            </div>
        </div>
        </>
)} 

export default Footer;