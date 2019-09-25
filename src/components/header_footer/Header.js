import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import '.././styles.css';
import SideDrawer from './SideDrawer';
import Zoom from 'react-reveal/Zoom';

class Header extends Component {
    
    state = {
        drawerOpen: false,
        headerShow: false,
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
       if(window.scrollY > 0) { this.setState({headerShow: true}) }
       else { this.setState({headerShow: false}) }
    }

toggleDrawer = () => {
    this.setState({
    
        drawerOpen: !this.state.drawerOpen
    });

}
    render() { 
        return ( 
         <AppBar 
           position="fixed"
           style={{
                   backgroundColor:  this.state.headerShow ? '#2f2f2f' : 'cornflowerblue',
                   boxShadow: 'none',
                    padding: '10px',
                 }}>

            <Toolbar>
                <Zoom right when={!this.state.headerShow}>
                    <div className="header_logo">
                        <div className="font-righteous header_logo_venue">KolmoLD</div>
                        <div className="header_logo_title">Future of Internet</div>

                    </div>
                    </Zoom>
          

           <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=> this.toggleDrawer()}

                        >
                    <MenuIcon/>
           </IconButton>
           <SideDrawer open={this.state.drawerOpen}
                       onClose={()=>this.toggleDrawer()
               }
           
           />
           
           </Toolbar>

         </AppBar>
         );
    }S
}
 
export default Header;