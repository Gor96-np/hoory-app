import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../Wrapper/Wrapper';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import * as actions from '../../store/actions/index';
import { withRouter } from 'react-router-dom';
import DrawerToggle from '../../components/SideDrawer/DrawerToggle/DraweToggle'
 
class Layout extends Component {
    state = {
        sideDrawerToggle:false
    }

    sideToggleHandler = () => {
        this.setState({sideDrawerToggle:false})
    }
    drawerToggleHandler = () => {
        this.setState(prevState => ({
            sideDrawerToggle:!prevState.sideDrawerToggle
        }))
    }

    logoutHandler = (event) => {
    event.preventDefault();
    this.props.onLogout();
    this.props.history.push('/')
    }

    render() {
    const Side = (
     <SideDrawer checked={this.props.focus}
                  styleCheck={this.props.assistName}
                   authCheck={this.props.authCheck}
                    name={this.props.assistName}
                     style={this.props.hooryItem}
                      account={this.props.auth}
                       auth={this.props.auth}
                        logoutClick={this.logoutHandler}
                          roundStyle={this.props.hooryItem}
                           roundAccount={this.props.auth}
                            signin={this.props.auth}
                             open={this.state.sideDrawerToggle}
                              closed={this.sideToggleHandler}/>     
    )
        return (    
         <Wrapper>
                 <DrawerToggle clicked={this.drawerToggleHandler}/>
                 { Side }
            <main>
                { this.props.children }
            </main>
         </Wrapper>
        )
    }
};

const mapStateToProps = state => {
    return {
        check:state.main.checked,
        focus:state.main.focus,
        colCheck:state.main.colCheck,
        onAuthCheck:state.main.authCheck,
        auth:state.auth.token,
        assistName:state.hoory.name,
        hooryItem:state.hoory.itemAdd

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout:() => dispatch(actions.logout())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Layout));