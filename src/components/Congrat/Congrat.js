import React from 'react';

import emiticon from '../assets/emoticon.png'
import Manimg from '../Img/ManImg'
import Womenimg from '../Img/WomenImg';

import classes from './Congrat.css'

const success = props => {

    let Imgelement = null;
    if(props.gender === 'Man') {
        Imgelement = <Manimg Mancolor={props.manSuccess}/>
    } else {
        Imgelement = <Womenimg Womencolor={props.womenSuccess}/>
    }

    return (
<div className={classes.Success}>
  <div className={classes.ImgContainer}>
        {Imgelement}
  </div>
  <h3 className={classes.Fantastic}>
        Fantastico  <img src={emiticon} alt="emotion"/>
  </h3>
     
  <p className={classes.Text}>
You have successfully setup the Hoory widget on your website!
<br />
Proceed to the Admin Dashboard to start training {props.name}
 </p>

 <button className={classes.Button}
           onClick={props.successClick}>
              Go To Admin Dashboard</button>
   
</div>
)};

export default success;