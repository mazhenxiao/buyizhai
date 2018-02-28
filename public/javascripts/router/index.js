import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { routerIndex } from './route-index';
const routers =[...routerIndex];

class SNCRouter extends Component {
    set404() {
        return <div>404</div>
    }
    setRoute() {
        return routers.map((r, i) => {
            
            return <Route key={i} {...r} />
        })
    }
    render() {
        return <Router>
            <Switch>
                {
                    this.setRoute()
                }
                <Route component={this.set404} />
            </Switch>
        </Router>

    }
}

export default SNCRouter;