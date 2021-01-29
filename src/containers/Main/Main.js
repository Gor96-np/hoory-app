import React, { Component } from 'react';

import General from '../../components/General/General';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import  { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

class Main extends Component {
    
logInClickHandler = (event) => {
event.preventDefault();
this.props.history.push('/signin')
}
startClickHandler = (event) => {
event.preventDefault();
this.props.history.push('/authentication')

}
mainCLickHandler = (event) => {
event.preventDefault()
this.props.history.push('/assistname')
}
genLogoutHandler = () => {
  this.props.onLogout()
}

    render() {
        let Main = (
        <General logClick={this.logInClickHandler}
                  signUpCLick={this.startClickHandler}
                   startNowClick={this.mainCLickHandler}
                     userSignIn={this.props.token}
                      logOutClicked={this.genLogoutHandler}
                       startDisbled={!this.props.token}/> 
        )
        return(
          <Wrapper>
                { Main }
          </Wrapper>
          )
    }
};

const mapStateToProps = state => {
  return {
    token:state.auth.token != null
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout:() => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);