import React from 'react';

import classes from './General.css';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Wblue from '../assets/small48.png';
import Button from '../UI/Button/Button';

const general = (props) => {    
let generalButtons = null;
if(!props.userSignIn) {
   generalButtons = (
      <Wrapper>
         <Button name="LOG IN"
                     butnType="LoginButton"
                      buttonCLick={props.logClick}/>
            <Button name="SIGN UP"
                     butnType="Signup"
                      buttonCLick={props.signUpCLick}/>
      </Wrapper>
   )
} else {
   generalButtons =  <Button name="LOG OUT"
                        butnType="LogoutMain"
                         buttonCLick={props.logOutClicked}/>
}
 return (
    <Wrapper>
         <header className={classes.Header}>
            <img src={Wblue} alt="Hoory"/> <h3>hoory</h3>
            { generalButtons }
         </header>   
         <main className={classes.Main}>
            <strong className={classes.TextCont}>
           <p style={{display:"inline",color:"rgb(98, 59, 234)"}}>All assistant </p> 
            <p style={{display:"inline"}}>for unmatched customer communication.</p> 

            </strong>
<div>
         <Button name="START NOW"
                  butnType="MainButton"
                   buttonCLick={props.startNowClick}
                    disabled={props.startDisbled}/>
</div>
         </main>
    </Wrapper>
     )
};

export default general;