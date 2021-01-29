import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import AssistName from '../../components/AssistName/Assistname';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux'

class HooryName extends Component {
    state = {
        assist:''
    }

nameChangedHandler = (event) =>  {
      this.setState({assist:event.target.value})
    };
onSubmit = (e) => {
    e.preventDefault()
     this.props.hoorySubmit(this.state.assist);
      this.props.history.push('/your-icon')
    }
    
    render() {
   
   return (
      <Wrapper>
         <AssistName assistName={this.state.assist}
                      hooryClicked={this.onSubmit}
                       assistValue={this.state.assist}
                        nameChanged={this.nameChangedHandler}/>
      </Wrapper>
        )
    }
};

const mapStateToProps = state => {
    return {
          logout:state.auth.logout,
          userId:state.auth.userData,
          hoory:state.hoory.hooryName,

    }
}

const mapDispatchToProps = dispatch => {
    return {
      hoorySubmit:(name) => dispatch(actions.sendHooryName(name))
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(HooryName);