import React, { Component } from 'react';
import RouterConfig from './config'
import MapView from './map'

class Index extends Component {
    render() {
        let { routes } = this.props;
        return <MapView routes={routes === undefined ? RouterConfig : routes } />
    }
}

export default Index;