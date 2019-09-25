import React from 'react';

const Location = () => {
    return (  

        <div className="location_wrapper">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.2794988043547!2d-80.54648302042922!3d43.475637156549105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7bad59dc743c13c0!2sHuawei%20Technologies%20Co.%2C%20Ltd.!5e0!3m2!1sen!2smx!4v1569431417289!5m2!1sen!2smx" 
           width="100%" 
           height="500" 
           frameBorder="0" 
           allowFullScreen="">

           </iframe>
        
        <div className="location_tag"> 
        <div>Location</div>  
        
        </div>
        
        
        </div>

    );
}
 
export default Location;