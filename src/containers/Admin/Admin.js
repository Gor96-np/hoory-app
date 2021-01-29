import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import * as actions from '../../store/actions/index';
import AdminMiddle from '../../components/Admindash/AdminMiddle/AdminMiddle';
import Admintop from '../../components/Admindash/AdminTop/AdminTop';
import Spinner from '../../components/UI/Spinner/Spinner';
import { withRouter } from "react-router-dom";
import classes from './Admin.css'

class Admin extends Component {
    state = {
        adminEmail:'',
    }
   

  componentDidMount() {
   this.props.onGetUsFirstLast(this.props.personDataId);
   this.props.onGetData(this.props.personDataId);
  }


logoutHandler = () => {
  this.props.onLogout()
}
    render() {
    let top = this.props.persFirstLastName.map(pers => (
      <Admintop key={new Date()}
                 userFirstname={pers.firstname}
                  userLastname={pers.lastname} 
                   email={pers.email}
                    click={this.logoutHandler}/>
    ))
    let middle = <Spinner />;
    if(!this.props.loading) {
      middle = this.props.hoory.map(user => (
        <AdminMiddle  key={user._id}
            hooryName={user.hooryname}
             imgWomenSwitch={user.color}
              imgManSwitch={user.color}
               switchImgGend={user.gender}
                userId={user._id} />        
      ));
      if(this.props.hoory.length <= 0) {
        middle = <h2>Please add your icons</h2>
      }
    }

        return (
          <Wrapper>
                   { top }
      <div className={classes.Admin}>
             { middle }
      </div>
          </Wrapper>
        )
    }
};

const mapStateToProps = state => {
    return {
      authToken:state.auth.token,
      signin:state.auth.signin,
      persFirstLastName:state.auth.usFirstLast,
      personDataId:state.auth.userData,
      hoory:state.hoory.hooryData,
      name:state.hoory.hooryName,
      gen:state.main.gender,
      color:state.main.picColor,
      loading:state.hoory.load,
      userDataId:state.hoory.dataId,
    }
  };

  const mapDispatToProps = dispatch => {
    return {
      onLogout:() => dispatch(actions.logout()),
      onGetUsFirstLast:(id) => dispatch(actions.getUserNames(id)),
      onGetData:(id) => dispatch(actions.getData(id)),
    }
  };
  

export default connect(mapStateToProps,mapDispatToProps)(withRouter(Admin));