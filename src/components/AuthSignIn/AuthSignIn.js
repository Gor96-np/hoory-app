import React from 'react';

import Wblue from '../assets/Img/Wblue.png';
import Google from '../assets/google1.png';
import classes from './AuthSignIn.css';
import Spinner from '../UI/Spinner/Spinner';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Button from '../UI/Button/Button'


const authSignIn = props => {
  let inputClass = [classes.SignUpInput];
  if(props.Invalid) {
    inputClass.push(classes.InvalidSignUp)
  }

  // let password = [classes.Password];
  // if(props.Invalid) {
  //   password.push(classes.InvalidSignUp)
  // };

  let inputs = (
  <Wrapper>
     <input type="email" className={inputClass.join(' ')} 
    // value={props.emailValue}
     placeholder="Email"
      onChange={props.emailChanged}  />
      
    <input type="password" className={inputClass.join(' ')} 
      // value={props.passwordValue}
        placeholder="Password"
        onChange={props.passwordChanged}/>

    <Button type="submit"
             butnType="Success"
              buttonCLick={props.onSubmit}
               name="Sign In" />

  </Wrapper>
  );
  if(props.loading) {
    inputs = <Spinner />
  }

    return (
       <div className={classes.AuthSign}>
        <section className={classes.ImgContainer}>
          <img src={Wblue} alt="hoory"/>
        <h1 className={classes.Hoory}>hoory</h1>
        </section>
        <h3>Sign in to your account</h3>
        <img className={classes.Img} src={Google} alt="Google"/>
         <p style={{color:'red'}}>{props.errroMessage}</p>
        <hr />

         { inputs }

       </div>
    )
};

export default authSignIn;