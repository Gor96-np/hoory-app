import React from 'react';

import classes from './SideDrawer.css';
import Girl from '../assets/woman.png';
import Navitem from './NavItems/NavItem';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import Logout from '../assets/logout.png';
import Backdrop from '../UI/Backdrop/Backdrop';
import Wrapper from '../../hoc/Wrapper/Wrapper'

const sideDrawer = React.memo(props => {
  
  let roundMiddle = [classes.sideRoundMiddle];
  if(props.roundStyle){roundMiddle.push(classes.Success)};
  let roundBottom = [classes.sideRoundBottom];
  if(props.roundAccount){roundBottom.push(classes.Success)};
  let roundLast = [classes.sideRoundLastBottom];
  if(props.signin){roundLast.push(classes.Success)};



  let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.open || props.openClick) {
        attachedClasses  = [classes.SideDrawer,classes.Open]
    }


return ( 
  <Wrapper>
    <Backdrop show={props.open}  backdropClick={props.closed}/>
     <div className={attachedClasses.join(' ')} onClick={props.closed}>
       <div style={{display:"inline-block",
              marginTop:'20px',fontWeight:'bold'}}>
      <Link to="/">
             <img src={Girl} alt="girl"></img> 
      </Link>
        <h4 style={{display:'inline',
                     fontSize:"30px",
                       marginLeft:'5px'}}>hoory</h4>
    </div>
       <hr />

  <div className={classes.SideColors}>
    <span className={classes.sideRoundTop}></span>
    <span className={classes.sideRoundTop}></span>
    <span className={classes.sideRoundTop}></span>
    {!props.signin ? <span className={roundLast.join(' ')}>
                 </span>:null}  
  </div>
 {!props.name ? <Navitem link="/assistname">Name your assistant</Navitem>:
    <Navitem link="/assistname">Name your assistant</Navitem> }

 {!props.style ?  <Navitem link="your-icon">Select your styles</Navitem>:
 <Navitem link="your-icon">Select your styles</Navitem> }

  {!props.signin ? <Navitem link="/authentication">Create your account</Navitem>:
  <Navitem link="/adminDashboard">Go to Admin</Navitem> }

  {!props.signin?  <Navitem link="/signin">Sign in
  </Navitem>:null }

  { props.auth ?
          <Button name="LOGOUT"
                   butnType="LogoutSide"
                    buttonCLick={props.logoutClick}>
                      <img src={Logout} alt="Logout"/>
                    </Button>:null }
    </div>

  </Wrapper>
 
)
}
);

export default sideDrawer;