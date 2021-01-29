import React, { Component } from 'react';

import  { connect } from 'react-redux';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Congrat from '../../components/Congrat/Congrat';
import { Redirect } from 'react-router-dom'

class Success extends Component {
    state = {
        hoory:''
    }

    successClick = () => {
        this.props.history.push('/adminDashboard')
    }
    render() {
        let isName = null;
        if(this.props.name === '') {
            isName = <Redirect to="/assistname"/>
        }
        return (
            <Wrapper>
                { isName }
               <Congrat  name={this.props.name} 
                          manSuccess={this.props.color}
                           womenSuccess={this.props.color}
                            gender={this.props.gend}
                             successClick={this.successClick}/>
            </Wrapper>
        )
    }
};

const mapStateToProps = state => {
    return {
        hooryname:state.main.inpVal,
        gend:state.main.gender,
        color:state.main.picColor,
        userId:state.hoory.adminId,
        name:state.hoory.hooryName
    }
};

export default connect(mapStateToProps)(Success);