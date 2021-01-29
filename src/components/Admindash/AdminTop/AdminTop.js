import React from 'react';

import classes from './AdminTop.css';
import Button from '../../UI/Button/Button';
import Logout from '../../assets/logout.png'


const adminTop = (props) => (
     <div className={classes.AdminTop}>
         <section className={classes.ImgCont}>
         </section> 
<h3 className={classes.Name}><p>{props.userFirstname} {props.userLastname}</p></h3>
         <p className={classes.Email}>{props.email}</p>
         <Button name="Logout" 
                  butnType="Logout"
                   buttonCLick={props.click}>
                    <img src={Logout} alt="Logout"/>
         </Button>

     </div>
 );

export default adminTop;