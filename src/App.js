import React, { Component } from 'react';
import  { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import classes from './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import * as actionTypes from './store/actions/index';
import { Redirect, Route,Switch } from 'react-router-dom';
import Main from './containers/Main/Main';
import IdleTimer from './components/IdleTimer/IdleTimer';

const asyncYourIcon = asyncComponent(() => {
  return import('./containers/Hoorydata/Hoorydata')
});
const asyncAuthentication = asyncComponent(() => {
  return import('./containers/Authenticate/Authenticate')
});
const asyncSuccess = asyncComponent(() => {
  return import('./containers/Success/Success')
});
const asyncSignIn = asyncComponent(() => {
  return import('./containers/SignIn/SignIn')
});
const asyncAdmin = asyncComponent(() => {
  return import('./containers/Admin/Admin')
});
const asyncAssistName = asyncComponent(() => {
  return import('./containers/HooryName/HooryName')
});
// const asyncMain = asyncComponent(() => {
//   return import('./containers/Main/Main')
// })


class App extends Component {

  componentDidMount() {
    this.props.onGetSignUpToken();
    this.props.onCheckToken();
    // this.props.storeToken()
  }

  logoutHandler = () => {
    this.props.onLogout()
  }
  render() {
    let routes = (
    <Switch>
        <Route path="/authentication" component={asyncAuthentication}/>
         <Route path="/signin" component={asyncSignIn}/>
          <Route path="/" component={Main}/>
           <Redirect to="/"/>
      </Switch>
      );
    if(this.props.auth) {
    routes = (
     <Switch>
      <Route path="/your-icon" component={asyncYourIcon}/>
       <Route path="/success" component={asyncSuccess}/>
        <Route path="/assistname" component={asyncAssistName}/>
         <Route path="/adminDashboard" component={asyncAdmin}/>
          <Route path="/authentication" component={asyncAuthentication}/>
           <Route path="/signin" component={asyncSignIn}/>
            <Route  path="/" component={Main}/>
             <Redirect to="/" />
      </Switch>
    ) 
    }

    return(
          <div className={classes.App}>
            
                 <IdleTimer idle={this.logoutHandler}/>
                 { routes }
                 
          </div>               
    );
  }
};

const mapStateToProps = state => {
  return {
    auth:state.auth.token,
    userToken:state.auth.userData,
    signUpToken:state.auth.signUpCongrat,
    hoory:state.hoory.hooryName
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckToken:() => dispatch(actionTypes.authCheckToken()),
    onGetSignUpToken:() => dispatch(actionTypes.getUserSugnUpToken()),
    onLogout:() => dispatch(actionTypes.logout())

  }
} 
export default connect(mapStateToProps,mapDispatchToProps)(App);