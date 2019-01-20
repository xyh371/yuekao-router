import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'

class RouterMap extends Component {
    render() {
        let { routes } = this.props;

        const defaultRouter =<Route path="/" component={ () => {
            return <Redirect to="/comp/homepage"   exact />
        }} key={"redirect"} ></Route>
        return <Switch>
            {
                routes.map((item, index) => {
                    const Comp = item.component;
                    return <Route path={item.path} component={ (apiRouter)=> {
                        return <Comp routes={ item.children } {...apiRouter}></Comp>
                    } }  key={index} />
                }).concat(defaultRouter)
            }
        </Switch>
    }
}

export default RouterMap;