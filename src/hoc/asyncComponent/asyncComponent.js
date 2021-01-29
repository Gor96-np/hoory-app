import React, { Component } from 'react';
import Layout from '../Layout/Layout'

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component:null
        }

        componentDidMount() {
            importComponent()
            .then(res => {
                this.setState({component:res.default})
            })
        }
        render() {
            const Comp = this.state.component;
            return (
            <Layout>
               {Comp ?<Comp { ...this.props }/>:null}
            </Layout>
            )
        }
    }
};

export default asyncComponent;