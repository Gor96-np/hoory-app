import React, { Component } from 'react';
import { connect } from 'react-redux';

import Stylehoory from '../../components/Stylehoory/Stylehoory';
import * as actions from '../../store/actions/index';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import { Redirect } from 'react-router-dom'

class HooryData extends Component {

    colSubmit = (event) => {
     event.preventDefault();
      this.props.onStoreItems(this.props.gender,
                              this.props.color,
                              this.props.name,
                              this.props.userId);
      if(this.props.auth) {
        this.props.history.replace('/success')

      } else {
        this.props.history.replace('/authentication')
      }
    }
render() {
 let isName = null;
 if(this.props.hoory === '') {
     isName = <Redirect to="/assistname"/>
 }
return (
     <Wrapper> 
         { isName }
         <Stylehoory onSubmit={this.colSubmit} 
                       name={this.props.hoory} 
                   />
     </Wrapper>
        )
    }
} 

const mapStateToProps = state => {
    return {
        gender:state.main.gender,
        color:state.main.picColor,
        hoory:state.hoory.hooryName,
        auth:state.auth.token,
        userId:state.auth.userData,
        name:state.hoory.hooryName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onStoreItems:(gender,color,name,localUserId) => dispatch(actions.submitHooryItems(gender,color,name,localUserId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HooryData);
