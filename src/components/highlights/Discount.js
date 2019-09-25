import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
    state = { 
        discountStart: 0,
        discountEnd: 30
    }
porcentage = () => {

if (this.state.discountStart < this.state.discountEnd){
    this.setState({
        discountStart: this.state.discountStart + 1
    })
}


}

componentDidUpdate(){
    setTimeout(()=>{
            this.porcentage()
    }, 50)
}

     
    render() { 
        return ( 
                <div className="center_wrapper">  
                    <div className="discount_wrapper">
                        <Fade onReveal={()=> this.porcentage()}>
                            <div className="discount_porcentage">
                                <span>{this.state.discountStart}%</span>
                                <span>off</span>
                            </div>
                        </Fade>
                        <Slide right>
                            <div className="discount_description">
                                <h3>This is what you win in terms of traffic</h3>
                                <p> he KolmoLD Network is decentralized network storage of [manifests](/documentation/manifest) and data chunks based on classic [p2p](https://en.wikipedia.org/wiki/Peer-to-peer) networks design. There are two types of nodes in this network are can be present: boot nodes and data nodes (peers). Boot nodes are for peers discovering. Peers are storing pinned data chunks and manifests and gives access for all other peers to this data. Peers are forming a distributed hash table (DHT) for all data they stored.</p>
                            <MyButton
                                text="  Sign up  "
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://google.com"
                            />
                            
                            </div>
                        </Slide> 

                     </div>
                    
                    
                    
                 </div>

         );
    }
}
 
export default Discount;