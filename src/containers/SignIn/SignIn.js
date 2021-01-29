import React, { Component } from 'react';

import AuthSignin from '../../components/AuthSignIn/AuthSignIn';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class SignIn extends Component {
    state = {
        email:'',
        password:'',
    }


signInSubmitHandler = (event) => {  
    event.preventDefault();
    this.props.onSignIn(this.state.email,this.state.password);
    if(this.props.signIn) {
        this.props.onRedirectPath()
    }
}


emailChangedHandler = (event) => {
  this.setState({email:event.target.value})
}

passwordChangedHandler = (event) => {
    this.setState({password:event.target.value})
}


    render() {
    let redirect = null;
    if(this.props.signIn) {
    redirect = <Redirect to={this.props.signInRedirect}/>
    } 

  const signInData = (
      <Wrapper>
          {redirect}
         <AuthSignin onSubmit={this.signInSubmitHandler}
                     emailChanged={this.emailChangedHandler}
                     passwordChanged={this.passwordChangedHandler}
                     emailValue={this.state.email}
                     passwordValue={this.state.password}
                     Invalid={this.props.message}
                     errroMessage={this.props.message}
                     loading={this.props.loading}
                     />
      </Wrapper>
         
        )
        return signInData
    }
};

const mapStateToProps = state => {
    return {
        signInMessage:state.auth.failMessage,
        signInRedirect:state.auth.setRedirect,
        signIn:state.auth.token,
        loading:state.auth.loading,
        message:state.auth.failMessage,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSignIn:(email,password) => dispatch(actions.signIn(email,password)),
        onRedirectPath:() => dispatch(actions.setAuthRedirectUser('/'))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignIn);