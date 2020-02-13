import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import '../Home.css'

class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <nav className="menuBar">
			<div style={{ display: 'flex', justifyContent: 'center'}}> 
				<ul >
					<li class="nav-li">
						Music
					</li>
					<li class="nav-li">
						About
					</li>
					<li class="nav-li">
						Booking
					</li>
				</ul>
			</div>
        </nav>
    );
  }
}

export default Navbar;
