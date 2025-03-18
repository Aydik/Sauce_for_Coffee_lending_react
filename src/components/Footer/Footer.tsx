import * as React from 'react';
import './Footer.scss'

export const Footer: React.FC = () => {
    return (
        <footer id="contact" className="footer bordered">
            <div className="footer_content">
                <div className="links">
                    <a>privacy</a>
                    <a>instagram</a>
                </div>
                <address className="address">
                    <a>ujjo llc, columbus oh, 43219</a>
                </address>
            </div>
        </footer>
    )
}