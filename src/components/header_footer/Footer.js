import React from 'react';
import Fade from 'react-reveal/Fade';
import '.././styles.css';

const Footer = () => {
    return (
        <div className="bck_red">
            <Fade delay={500}> 
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="footer_copyright">
               2019 All rights reserved
            </div>


            </Fade>

        </div> 


     );
}
 
export default Footer;