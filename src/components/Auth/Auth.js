import React from 'react';

import Google from '../assets/google1.png'
import classes from './Auth.css';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button'

const auth = React.memo(props => {
    const inpClasses = [classes.firstname];
    if(props.invalid) {
        inpClasses.push(classes.InvalidSignedUp)
}
    // if(props.invalidInp === 'First name cannot be blank') {
    //     firstClass.push(classes.firstFocus)
    // }
    // const lastClass = [classes.lastname]
    // if(props.invalidInp === 'Lastname name cannot be blank') {
    //   lastClass.push(classes.lastFocus)
    // }
    // const emailClass = [classes.email]
    // if(props.invalidInp === 'Email cannot be blank') {
    //     emailClass.push(classes.emailFocus)
    // }
    // if(props.invalidInp === 'Account already exist') {
    //     emailClass.push(classes.emailFocus)
    // }
    // const passwordClass = [classes.password]
    // if(props.invalidInp === 'Password cannot be blank') {
    //     passwordClass.push(classes.passwordFocus)
    // }

    let forms = (
        <form onSubmit={props.onSubmit}>
        
            <input onChange={props.firstnameChange}
                     value={props.firstValue} 
                      className={inpClasses.join(' ')}
                       type="text"
                        placeholder="First Name"
                         maxLength="10"/>
            <input onChange={props.lastnameChange}
                    value={props.lastValue} 
                     className={inpClasses.join(' ')}
                      type="text"
                       placeholder="Last Name"
                        maxLength="15"/>
            <input onChange={props.emailChange}
                    className={inpClasses.join(' ')}
                     type="email"
                      value={props.emailValue}
                       placeholder="Email"/>
            <input onChange={props.passwordChange} 
                      value={props.passwordValue}
                       className={inpClasses.join(' ')}
                        type="password" 
                         placeholder="Password"
                          maxLength="15"/>
                         
            <Button type="submit"
                     butnType="Success"
                      buttonCLick={props.clickCheck}
                       name="Create account"/>
    </form>);
    if(props.loading) {
        forms = <Spinner />
    }
    return (
        <div className={classes.Cont}>
            <h4 style={{marginBottom:'25px'}}>Create your account</h4>
            <img className={classes.Google} 
                     src={Google} alt="google" />
            <hr className={classes.hr}/>
            <p style={{ color:'red',
                         fontSize: '18px'}}>
                             {props.message}
            </p> 
             {forms}
        </div>
    )
});

export default auth;