import React from 'react';

import classes from './Assistname.css';
// import { Link,Redirect } from 'react-router-dom';
import Hoory from '../assets/assist.png';
import Button from '../UI/Button/Button'

const assistName = props => {
        return (
            <div className={classes.Assistname}>
               <div className={classes.Container}>
                 <img  src={Hoory} alt="Hoory"/>
               </div>
        <h2 style={{fontWeight:'bold'}}>hoory</h2>
               <h3>Name Your Assistant</h3>
        <input onChange={props.nameChanged}
            type="text"
             value={props.assistValue}
              placeholder="Name" required
               maxLength="10"></input>
             <div className={classes.Cont}>

    <Button disabled={props.assistName.length < 3}
             butnType="Success"
              buttonCLick={props.hooryClicked}
               name="Start"/>
      </div>
       </div>

        );
    }
export default assistName;