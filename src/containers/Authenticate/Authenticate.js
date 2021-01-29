import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auth from '../../components/Auth/Auth';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom'

class Authenticate extends Component {
 state = {
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            res:'',
            invInput:'',
            formValid:false,
            loading:false
 }


submitHandler = (e) => {
 e.preventDefault();
this.props.onSignUp(this.state.firstname,this.state.lastname,this.state.email,this.state.password);
if(this.props.isSignUp && !this.props.invalid) {
   this.props.onRedirectPath()
}
}

checkClickHandler = () => {
  this.setState({authclickCheck:true})
}

firstnameChangedHandler = (e) => {
     this.setState({firstname:e.target.value})
 };
lastnameChangedHandler = (e) => {
  this.setState({lastname:e.target.value})
};
emailChangedHandler = (e) => {
  this.setState({email:e.target.value})
};
passwordChangedHandler = (e) => {
  this.setState({password:e.target.value})
}
  
    render() {
      let redirect = null;
      if(this.props.isSignUp) {
        redirect = <Redirect to={this.props.setSignInPath}/>
      }

  let formInputElement = (
    <Wrapper>
      {redirect}
     <Auth onSubmit={this.submitHandler}
            loading={this.props.loading}
             firstnameChange={this.firstnameChangedHandler}
              lastnameChange={this.lastnameChangedHandler}
               emailChange={this.emailChangedHandler}
                passwordChange={this.passwordChangedHandler}
                 firstValue={this.state.firstname}
                  lastValue={this.state.lastname}
                   emailValue={this.state.email}
                    passwordValue={this.state.password}
                     message={this.props.error} 
                      invalid={this.props.invalid}
                        disable={!this.state.firstname}
                         clickCheck={this.props.onAuthCheckClick}/>
           
    </Wrapper>
      )

        return(
        <div>
             {formInputElement}
        </div>

        )
    }
};

const mapStateToProps = state => {
  return {
    loading:state.auth.loading,
    isSignUp:state.auth.isSignUp,
    invalid:state.auth.signUpinvalid,
    error:state.auth.error,
    setSignInPath:state.auth.setSignIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUp:(firstname,lastname,email,password) => dispatch(actions.signUpUser(firstname,lastname,email,password)),
    onRedirectPath:() => dispatch(actions.setSignInRedirect('/signin')),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Authenticate);