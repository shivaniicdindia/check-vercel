import React from 'react'
import './Footer.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';

function Footer() {
    return (
        <div className='footer'>
            <p className="footer-title">Shivani</p>
            <div className="footer-social">
                <a href="/" className="footer-icon"><LinkedInIcon/></a>
                <a href="/" className="footer-icon"><TelegramIcon/></a>
                <a href="/" className="footer-icon"><TwitterIcon/></a>
                <a href="/" className="footer-icon"><GitHubIcon/></a>
            </div>
            <p className='footer-copyright'>&#169; 2020 copyright all right reserved</p>
        </div>
    )
}

export default Footer
