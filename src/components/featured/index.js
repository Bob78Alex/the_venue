import React from 'react';
import Carousel from './Carousel';
import TimerCount from './TimerCount';
import Zoom from 'react-reveal/Zoom';

const Featured = () => {
    return ( 
        <div style={{position: 'relative'}}>
            
            <Carousel/>

            <Zoom top delay={1000}>
            <div className="artist_name">
                <div className="wrapper">
                    KolmoLD

                </div>
                           </div>
                           </Zoom>
            <TimerCount/>
       </div>

     );
}
 
export default Featured;