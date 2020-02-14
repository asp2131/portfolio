import React, { useState } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import '../Home.css'

function Navbar(props){


	const [state, setState] = useState({
    current: 'mail',
    visible: false
  })
  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  
    return (
        <nav className="menuBar">
			<div style={{ display: 'flex', justifyContent: 'center'}}> 
				<ul >
					<li className="nav-li">
            <Button size={"large"} onClick={() => {props.changeView("Music")}}>
						Music
            </Button>
					</li>
					<li className="nav-li">
              <Button size={"large"} onClick={() => { props.changeView("Gallery") }}>
						Gallery
            </Button>
					</li>
					<li className="nav-li">
              <Button size={"large"} onClick={() => { props.changeView("Booking") }}>
						Booking
            </Button>
					</li>
				</ul>
			</div>
        </nav>
    );
}

export default Navbar;
